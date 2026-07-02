import { test, expect } from '../fixtures/baseTest';

test.describe('OrangeHRM - Dashboard', () => {

    test.beforeEach(async ({ loginPage, page }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
        await page.waitForURL(/dashboard/);
    });

    test('TC020: Dashboard shows Time at Work widget', async ({ page }) => {
        await expect(page.getByText('Time at Work')).toBeVisible();
    });

    test('TC021: Dashboard shows Quick Launch panel with shortcuts', async ({ page }) => {
        await expect(page.getByText('Quick Launch')).toBeVisible();
        await expect(page.getByRole('link', { name: 'Apply Leave' })).toBeVisible();
    });

    test('TC022: Dashboard shows My Actions and Employees on Leave Today widgets', async ({ page }) => {
        await expect(page.getByText('My Actions')).toBeVisible();
        await expect(page.getByText('Employees on Leave Today')).toBeVisible();
    });

});
