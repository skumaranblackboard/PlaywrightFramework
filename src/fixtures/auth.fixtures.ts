import * as fs from 'fs';
import { test as base } from './api.fixtures';
import { StoredUsers, USERS_PATH } from '../setup/stored-users';

export type AuthFixture = {
    storedUsers: StoredUsers;
};

export const test = base.extend<AuthFixture>({
    storedUsers: async ({}, use) => {
        const users = JSON.parse(fs.readFileSync(USERS_PATH, 'utf-8')) as StoredUsers;
        await use(users);
    },
});
