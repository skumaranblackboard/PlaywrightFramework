import { request } from '@playwright/test';
import * as fs from 'fs';
import dotenv from 'dotenv';
import { MoodleApi } from '../testdata/api/data-api';
import { fetchMoodleToken } from '../testdata/api/token';
import { USERS_PATH, StoredUsers } from './stored-users';

dotenv.config();

export default async function globalTeardown() {
    if (!fs.existsSync(USERS_PATH)) return;

    const { teacher, student } = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8')) as StoredUsers;

    const apiContext = await request.newContext({ baseURL: process.env.BASE_URL });
    const token = await fetchMoodleToken(apiContext);
    const api = new MoodleApi(apiContext, token);

    if (teacher?.id) await api.deleteUser(teacher.id);
    if (student?.id) await api.deleteUser(student.id);

    await apiContext.dispose();
}
