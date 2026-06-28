import { test, expect } from '../fixtures/baseTest';

test.describe('OrangeHRM - Login Tests', () => {

    test('TC001: Successful Admin login redirects to Dashboard', async ({ loginPage, page }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
        await expect(page).toHaveURL(/dashboard/);
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    test('TC002: Login with invalid username shows error message', async ({ loginPage, page }) => {
        await loginPage.open();
        await loginPage.loginAs('invalidUser99', 'admin123');
        await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
        await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
    });

    test('TC003: Login with invalid password shows error message', async ({ loginPage, page }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'wrongpassword99');
        await expect(page.locator('.oxd-alert-content-text')).toBeVisible();
        await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
    });

    test('TC004: Login with empty credentials shows required field errors', async ({ loginPage, page }) => {
        await loginPage.open();
        await loginPage.loginAs('', '');
        const validationErrors = await loginPage.getValidationErrors();
        await expect(validationErrors).toHaveCount(2);
        await expect(validationErrors.first()).toHaveText('Required');
    });

});

test.describe('OrangeHRM - Navigation Tests', () => {

    test('TC005: Navigate to Admin panel after login', async ({ loginPage, homePage, page }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
        await homePage.openAdminPanel();
        await expect(page).toHaveURL(/viewSystemUsers/);
        await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
    });

    test('TC006: Navigate back to Dashboard from Admin panel', async ({ loginPage, homePage, page }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
        await homePage.openAdminPanel();
        await expect(page).toHaveURL(/viewSystemUsers/);
        await homePage.openDashboardPanel();
        await expect(page).toHaveURL(/dashboard/);
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

});

test.describe('OrangeHRM - Admin Panel Tests', () => {

    test('TC007: Add new user form loads with correct fields', async ({ loginPage, homePage, adminPanel, page }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
        await homePage.openAdminPanel();
        await adminPanel.clickAddUser();
        await expect(page).toHaveURL(/saveSystemUser/);
        await expect(page.getByText('User Role')).toBeVisible();
        await expect(page.getByText('Employee Name')).toBeVisible();
        await expect(page.getByText('Status')).toBeVisible();
    });

    test('TC008: Select ESS user role in Add User form', async ({ loginPage, homePage, adminPanel, page }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
        await homePage.openAdminPanel();
        await adminPanel.clickAddUser();
        await adminPanel.selectUserRole('ESS');
        await expect(page.locator('.oxd-select-text-input').first()).toContainText('ESS');
    });

    test('TC009: Search for existing user in Admin panel returns results', async ({ loginPage, homePage, adminPanel, page }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
        await homePage.openAdminPanel();
        await adminPanel.searchByUsername('Admin');
        const rows = await adminPanel.getTableRowCount();
        await expect(rows.first()).toBeVisible();
        await expect(page.locator('.oxd-table-body')).toContainText('Admin');
    });

});

test.describe('OrangeHRM - Logout Tests', () => {

    test('TC010: User can successfully logout and is redirected to login page', async ({ loginPage, homePage, page }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
        await expect(page).toHaveURL(/dashboard/);
        await homePage.logout();
        await expect(page).toHaveURL(/login/);
        await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    });

});
