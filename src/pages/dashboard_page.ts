import { expect, Page, test } from '@playwright/test';

export class DashboardPage {
    constructor(private page: Page) {}

    async assertLoaded(): Promise<void> {
        await test.step('Assert dashboard is loaded', async () => {
            await expect(this.page).toHaveURL(/\/my/);
        });
    }

    async navigateToMyCourses(): Promise<DashboardPage> {
        await test.step('Navigate to My courses', async () => {
            await this.page.goto('/my/courses');
        });
        return this;
    }

    async navigateToProfile(): Promise<DashboardPage> {
        await test.step('Navigate to user profile', async () => {
            await this.page.goto('/user/profile.php');
        });
        return this;
    }

    async logout(): Promise<void> {
        await test.step('Logout', async () => {
            await this.page.locator('.usermenu').click();
            await this.page.getByRole('link', { name: 'Log out' }).click();
        });
    }
}
