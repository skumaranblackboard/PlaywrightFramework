import { test as base } from './auth.fixtures';
import { LoginPage } from '../pages/login_page';
import { DashboardPage } from '../pages/dashboard_page';

type PageFixture = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
};

export const test = base.extend<PageFixture>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
});

export { expect } from '@playwright/test';
