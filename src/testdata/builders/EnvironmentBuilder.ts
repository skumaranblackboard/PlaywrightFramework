import { MoodleApi, CreatedUser, CreatedCourse } from '../api/data-api';
import { generateUser, UserPayload } from './UserBuilder';
import { generateCourse, CoursePayload } from './CourseBuilder';

interface DataRecord<T = unknown> {
    type: string;
    create: (api: MoodleApi, env: CreatedEnvironment) => Promise<T>;
}

export interface CreatedEnvironment {
    user?: CreatedUser;
    users: CreatedUser[];
    course?: CreatedCourse;
    courses: CreatedCourse[];
    instructor?: CreatedUser;
    instructors: CreatedUser[];
    student?: CreatedUser;
    students: CreatedUser[];
}

class CreateGeneric {
    constructor(
        protected api: MoodleApi,
        protected _parent?: CreateGeneric,
        protected _record?: DataRecord,
    ) {}

    get with(): this { return this; }
    get and(): this { return this; }

    private collectRecords(): DataRecord[] {
        const records: DataRecord[] = [];
        let node: CreateGeneric | undefined = this;
        while (node) {
            if (node._record) records.unshift(node._record);
            node = node._parent;
        }
        return records;
    }

    async exec(): Promise<CreatedEnvironment> {
        const env: CreatedEnvironment = { users: [], courses: [], instructors: [], students: [] };

        for (const record of this.collectRecords()) {
            const created = await record.create(this.api, env);

            if (record.type === 'user') {
                env.user = created as CreatedUser;
                env.users.push(created as CreatedUser);
            } else if (record.type === 'course') {
                env.course = created as CreatedCourse;
                env.courses.push(created as CreatedCourse);
            } else if (record.type === 'instructor') {
                env.instructor = created as CreatedUser;
                env.instructors.push(created as CreatedUser);
            } else if (record.type === 'student') {
                env.student = created as CreatedUser;
                env.students.push(created as CreatedUser);
            }
        }

        return env;
    }
}

class UserNode extends CreateGeneric {}

class CourseNode extends CreateGeneric {
    async instructor(opts: { overrides?: Partial<UserPayload> } = {}): Promise<InstructorNode> {
        return new InstructorNode(this.api, this, opts);
    }

    async student(opts: { overrides?: Partial<UserPayload> } = {}): Promise<StudentNode> {
        return new StudentNode(this.api, this, opts);
    }
}

class InstructorNode extends CreateGeneric {
    constructor(
        api: MoodleApi,
        parent: CreateGeneric,
        opts: { overrides?: Partial<UserPayload> } = {},
    ) {
        const record: DataRecord<CreatedUser> = {
            type: 'instructor',
            create: async (api, env) => {
                const user = await api.createUser(generateUser(opts.overrides, 'teach'));
                if (env.course) {
                    await api.enrollUser(user.id, env.course.id, 'editingteacher');
                }
                return user;
            },
        };
        super(api, parent, record);
    }

    async student(opts: { overrides?: Partial<UserPayload> } = {}): Promise<StudentNode> {
        return new StudentNode(this.api, this, opts);
    }
}

class StudentNode extends CreateGeneric {
    constructor(
        api: MoodleApi,
        parent: CreateGeneric,
        opts: { overrides?: Partial<UserPayload> } = {},
    ) {
        const record: DataRecord<CreatedUser> = {
            type: 'student',
            create: async (api, env) => {
                const user = await api.createUser(generateUser(opts.overrides, 'stu'));
                if (env.course) {
                    await api.enrollUser(user.id, env.course.id, 'student');
                }
                return user;
            },
        };
        super(api, parent, record);
    }
}

export class EnvironmentBuilder {
    constructor(private api: MoodleApi) {}

    async user(opts: { overrides?: Partial<UserPayload>; prefix?: string } = {}): Promise<UserNode> {
        const record: DataRecord<CreatedUser> = {
            type: 'user',
            create: (api) => api.createUser(generateUser(opts.overrides, opts.prefix ?? 'user')),
        };
        return new UserNode(this.api, undefined, record);
    }

    async course(overrides: Partial<CoursePayload> = {}): Promise<CourseNode> {
        const record: DataRecord<CreatedCourse> = {
            type: 'course',
            create: (api) => api.createCourse(generateCourse(overrides)),
        };
        return new CourseNode(this.api, undefined, record);
    }
}
