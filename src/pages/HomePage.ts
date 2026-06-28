import { Locator, Page } from '@playwright/test';

export class HomePage{

    private readonly adminPanel: Locator;
    private readonly dashboardPanel: Locator;

    constructor(private page: Page){
        this.adminPanel = page.getByRole('link', {name: 'Admin'});
        this.dashboardPanel = page.getByRole('link', {name:'Dashboard'});
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

}