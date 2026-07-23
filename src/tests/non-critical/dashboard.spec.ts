import { test, expect } from '../../fixtures/base.fixture';
import { TEACHER_STATE } from '../../setup/stored-users';

test.use({ storageState: TEACHER_STATE });

test.describe('Dashboard', { tag: '@regression' }, () => {

    test('My courses page loads with heading', async ({ dashboardPage, page }) => {
        await dashboardPage.navigateToMyCourses();
        await expect(page).toHaveURL(/\/my\/courses/);
        await expect(page.getByRole('heading', { name: 'My courses' })).toBeVisible();
    });

    test('User profile page loads with full name', async ({ dashboardPage, page }) => {
        await dashboardPage.navigateToProfile();
        await expect(page).toHaveURL(/\/user\/profile/);
        await expect(page.locator('[data-field="fullname"]').or(page.getByRole('heading', { level: 1 }))).toBeVisible();
    });

    test('Logout redirects to login page', async ({ dashboardPage, page }) => {
        await dashboardPage.logout();
        await expect(page).toHaveURL(/\/login/);
        await expect(page.locator('#loginbtn')).toBeVisible();
    });

});
