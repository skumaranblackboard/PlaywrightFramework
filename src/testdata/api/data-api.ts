import { APIRequestContext } from '@playwright/test';

const ENDPOINT = '/webservice/rest/server.php';

export interface CreatedUser {
    id: number;
    username: string;
}

export interface CreatedCourse {
    id: number;
    shortname: string;
    fullname: string;
}

export class MoodleApi {
    constructor(
        private request: APIRequestContext,
        private token: string,
    ) {}

    async createUser(payload: {
        username: string;
        password: string;
        firstname: string;
        lastname: string;
        email: string;
    }): Promise<CreatedUser> {
        const response = await this.request.post(ENDPOINT, {
            params: { wstoken: this.token, wsfunction: 'core_user_create_users', moodlewsrestformat: 'json' },
            form: {
                'users[0][username]': payload.username,
                'users[0][password]': payload.password,
                'users[0][firstname]': payload.firstname,
                'users[0][lastname]': payload.lastname,
                'users[0][email]': payload.email,
            },
        });
        const body = await response.json();
        return body[0];
    }

    async deleteUser(userId: number): Promise<void> {
        await this.request.post(ENDPOINT, {
            params: { wstoken: this.token, wsfunction: 'core_user_delete_users', moodlewsrestformat: 'json' },
            form: { 'userids[0]': String(userId) },
        });
    }

    async createCourse(payload: {
        shortname: string;
        fullname: string;
        categoryid: number;
    }): Promise<CreatedCourse> {
        const response = await this.request.post(ENDPOINT, {
            params: { wstoken: this.token, wsfunction: 'core_course_create_courses', moodlewsrestformat: 'json' },
            form: {
                'courses[0][shortname]': payload.shortname,
                'courses[0][fullname]': payload.fullname,
                'courses[0][categoryid]': String(payload.categoryid),
            },
        });
        const body = await response.json();
        return body[0];
    }

    async deleteCourse(courseId: number): Promise<void> {
        await this.request.post(ENDPOINT, {
            params: { wstoken: this.token, wsfunction: 'core_course_delete_courses', moodlewsrestformat: 'json' },
            form: { 'courseids[0]': String(courseId) },
        });
    }

    async enrollUser(userId: number, courseId: number, role: 'editingteacher' | 'student'): Promise<void> {
        const roleId = role === 'editingteacher' ? 3 : 5;
        await this.request.post(ENDPOINT, {
            params: { wstoken: this.token, wsfunction: 'enrol_manual_enrol_users', moodlewsrestformat: 'json' },
            form: {
                'enrolments[0][roleid]': String(roleId),
                'enrolments[0][userid]': String(userId),
                'enrolments[0][courseid]': String(courseId),
            },
        });
    }
}
