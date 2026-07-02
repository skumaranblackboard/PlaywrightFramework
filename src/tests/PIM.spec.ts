import { test, expect } from '../fixtures/baseTest';

test.describe('OrangeHRM - PIM Module', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
    });

    test('TC014: Navigate to PIM module shows Employee Management heading', async ({ pimPage, page }) => {
        await pimPage.navigate();
        await expect(page).toHaveURL(/viewPimModule/);
        await expect(page.getByRole('heading', { name: 'Employee Information' })).toBeVisible();
    });

    test('TC015: Search all employees returns at least one result', async ({ pimPage }) => {
        await pimPage.navigate();
        await pimPage.searchByName('');
        const rows = await pimPage.getRows();
        await expect(rows.first()).toBeVisible();
    });

    test('TC016: Search with non-existent name shows No Records Found', async ({ pimPage, page }) => {
        await pimPage.navigate();
        await pimPage.searchByName('ZZZNOTEXIST99999');
        await expect(page.getByText('No Records Found')).toBeVisible();
    });

    test('TC017: Employee list table has expected column headers', async ({ pimPage }) => {
        await pimPage.navigate();
        await expect(pimPage.tableHeader).toContainText('Id');
        await expect(pimPage.tableHeader).toContainText('First (& Middle) Name');
        await expect(pimPage.tableHeader).toContainText('Last Name');
    });

    test('TC018: Clicking Add navigates to Add Employee form', async ({ pimPage, page }) => {
        await pimPage.navigate();
        await pimPage.clickAdd();
        await expect(page).toHaveURL(/addEmployee/);
        await expect(page.getByRole('heading', { name: 'Add Employee' })).toBeVisible();
    });

    test('TC019: Add Employee form has First Name, Last Name and Employee ID fields', async ({ pimPage, page }) => {
        await pimPage.navigateToAddEmployee();
        await expect(page.getByPlaceholder('First Name')).toBeVisible();
        await expect(page.getByPlaceholder('Last Name')).toBeVisible();
        await expect(page.locator('input[placeholder="Employee Id"]')).toBeVisible();
    });

});
