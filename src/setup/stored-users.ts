import * as path from 'path';

export interface StoredUser {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
}

export interface StoredUsers {
    teacher: StoredUser;
    student: StoredUser;
}

export const USERS_PATH = path.join(process.cwd(), 'auth', 'users.json');
export const TEACHER_STATE = path.join(process.cwd(), 'auth', 'teacher.json');
export const STUDENT_STATE = path.join(process.cwd(), 'auth', 'student.json');
