import { Locator, Page } from '@playwright/test';

export class HomePage{

    private readonly adminPanel: Locator;
    private readonly dashboardPanel: Locator;
    private readonly myInfo: Locator;
 
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




}