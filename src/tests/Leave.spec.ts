import { test, expect } from '../fixtures/baseTest';

test.describe('OrangeHRM - Leave Module', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.loginAs('Admin', 'admin123');
    });

    test('TC023: Navigate to Leave List shows correct heading and URL', async ({ leavePage, page }) => {
        await leavePage.navigateToLeaveList();
        await expect(page).toHaveURL(/viewLeaveList/);
        await expect(page.getByRole('heading', { name: 'Leave List' })).toBeVisible();
    });

    test('TC024: Leave List table has Type, Leave Date, Status and Employee columns', async ({ leavePage }) => {
        await leavePage.navigateToLeaveList();
        await expect(leavePage.tableHeader).toContainText('Type');
        await expect(leavePage.tableHeader).toContainText('Leave Date');
        await expect(leavePage.tableHeader).toContainText('Status');
    });

    test('TC025: Leave Entitlements page loads with Add Entitlement button', async ({ leavePage, page }) => {
        await leavePage.navigateToEntitlements();
        await expect(page).toHaveURL(/viewLeaveEntitlements/);
        await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
    });

    test('TC026: Apply Leave form shows Leave Type dropdown and date fields', async ({ leavePage, page }) => {
        await leavePage.navigateToApplyLeave();
        await expect(page).toHaveURL(/applyLeave/);
        await expect(leavePage.leaveTypeDropdown).toBeVisible();
        await expect(page.getByText('From Date')).toBeVisible();
        await expect(page.getByText('To Date')).toBeVisible();
    });

});
