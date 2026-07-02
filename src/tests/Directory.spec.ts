import { test, expect } from '../fixtures/baseTest';

test.describe('OrangeHRM - Directory Module', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
    });

    test('TC027: Navigate to Directory module shows Directory heading', async ({ directoryPage, page }) => {
        await directoryPage.navigate();
        await expect(page).toHaveURL(/viewDirectory/);
        await expect(page.getByRole('heading', { name: 'Directory' })).toBeVisible();
    });

    test('TC028: Directory loads and shows employee cards by default', async ({ directoryPage }) => {
        await directoryPage.navigate();
        await expect(directoryPage.employeeCards.first()).toBeVisible();
    });

    test('TC029: Search with no match in Directory shows No Records Found', async ({ directoryPage, page }) => {
        await directoryPage.navigate();
        await directoryPage.searchByName('ZZZNOTEXIST99999');
        await expect(page.getByText('No Records Found')).toBeVisible();
    });

});
