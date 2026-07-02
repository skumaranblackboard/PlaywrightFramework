import { test, expect } from '../fixtures/baseTest';

const PIM_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule';

test.describe('API to UI - Employee Management', () => {

    test('TC013: Employee created via API is visible in PIM UI', async ({ loginPage, page, api }) => {
        // Login via UI to establish session (page.request shares these cookies)
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');

        // Create employee via API using the authenticated session
        const employee = await api.createEmployee('APIFirst', 'APILast');
        expect(employee.empNumber).toBeDefined();

        // Navigate to PIM and search for the created employee
        await page.goto(PIM_URL);
        await page.getByPlaceholder('Type for hints...').fill('APIFirst');
        await page.getByRole('button', { name: 'Search' }).click();

        // Assert employee appears in the results table
        await expect(page.locator('.oxd-table-body')).toContainText('APIFirst');
        await expect(page.locator('.oxd-table-body')).toContainText('APILast');

        // Cleanup: delete the employee via API after assertion
        await api.deleteEmployee(employee.empNumber);
    });

});
