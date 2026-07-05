import * as allure from 'allure-js-commons';
import { test as base } from './auth.fixtures';
import { LoginPage } from '../pages/login_page';
import { DashboardPage } from '../pages/dashboard_page';

type PageFixture = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    suiteLabel: void;
};

export const test = base.extend<PageFixture>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    suiteLabel: [
        async ({}, use, testInfo) => {
            await allure.parentSuite(testInfo.file.includes('/critical/') ? 'Critical' : 'Non-Critical');
            await use();
        },
        { auto: true },
    ],
});

export { expect } from '@playwright/test';
