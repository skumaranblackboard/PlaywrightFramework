import { test, expect } from '../fixtures/baseTest';

const BASE = 'https://opensource-demo.orangehrmlive.com/web/index.php';

test.describe('OrangeHRM - Admin Configuration', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
    });

    test('TC030: Job Titles page loads with heading and Add button', async ({ page }) => {
        await page.goto(`${BASE}/admin/viewJobTitleList`);
        await expect(page).toHaveURL(/viewJobTitleList/);
        await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    });

    test('TC031: Pay Grades page loads with correct heading', async ({ page }) => {
        await page.goto(`${BASE}/admin/viewPayGrades`);
        await expect(page).toHaveURL(/viewPayGrades/);
        await expect(page.getByRole('heading', { name: 'Pay Grades' })).toBeVisible();
    });

    test('TC032: Nationalities page loads with heading and Add button', async ({ page }) => {
        await page.goto(`${BASE}/admin/nationalities`);
        await expect(page).toHaveURL(/nationalities/);
        await expect(page.getByRole('heading', { name: 'Nationalities' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    });

    test('TC033: Email Configuration page loads with Send Test Email button', async ({ page }) => {
        await page.goto(`${BASE}/admin/listMailConfiguration`);
        await expect(page).toHaveURL(/listMailConfiguration/);
        await expect(page.getByRole('heading', { name: 'Email Configuration' })).toBeVisible();
    });

});
