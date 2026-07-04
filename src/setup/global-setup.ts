import { chromium, request } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';
import { generateUser, DEFAULT_PASSWORD } from '../testdata/builders/UserBuilder';
import { MoodleApi } from '../testdata/api/data-api';
import { USERS_PATH, TEACHER_STATE, STUDENT_STATE } from './stored-users';

dotenv.config();

async function loginAndSave(username: string, statePath: string) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(`${process.env.BASE_URL}/login/index.php`);
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(DEFAULT_PASSWORD);
    await page.locator('#loginbtn').click();
    await page.waitForURL(/\/my/);
    await page.context().storageState({ path: statePath });
    await browser.close();
}

export default async function globalSetup() {
    const authDir = path.join(process.cwd(), 'auth');
    if (!fs.existsSync(authDir)) fs.mkdirSync(authDir);

    const apiContext = await request.newContext({ baseURL: process.env.BASE_URL });
    const api = new MoodleApi(apiContext, process.env.MOODLE_TOKEN!);

    const teacherPayload = generateUser({}, 'teach');
    const studentPayload = generateUser({}, 'stu');

    const teacher = await api.createUser(teacherPayload);
    const student = await api.createUser(studentPayload);

    await loginAndSave(teacherPayload.username, TEACHER_STATE);
    await loginAndSave(studentPayload.username, STUDENT_STATE);

    fs.writeFileSync(
        USERS_PATH,
        JSON.stringify({
            teacher: { ...teacher, firstname: teacherPayload.firstname, lastname: teacherPayload.lastname },
            student: { ...student, firstname: studentPayload.firstname, lastname: studentPayload.lastname },
        }, null, 2),
    );

    await apiContext.dispose();
}
