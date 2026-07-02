import { expect, Locator, Page } from '@playwright/test';

export class HomePage{

    private readonly adminPanel: Locator;
    private readonly dashboardPanel: Locator;
    private readonly upgradePlan: Locator;

    constructor(private page: Page){
        this.adminPanel = page.getByRole('link', {name: 'Admin'});
        this.dashboardPanel = page.getByRole('link', {name:'Dashboard'});
        this.upgradePlan = page.locator('.orangehrm-upgrade-button');
    }

    async openAdminPanel(){
        await this.adminPanel.click();
    }

    async openDashboardPanel(){
        await this.dashboardPanel.click();
    }

    async logout(){
        await this.page.locator('.oxd-userdropdown-tab').click();
        await this.page.getByRole('menuitem', {name: 'Logout'}).click();
    }

    async assertDashboardHeader(){
        await expect(this.page).toHaveURL(/dashboard\/index/);
    }

    async assertUpgradePanel(){
        await expect(this.upgradePlan).toBeVisible();
    }

}