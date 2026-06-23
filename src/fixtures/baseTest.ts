import {test as base} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AdminPanel } from "../pages/AdminPanel";



type TestFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
    adminPanel: AdminPanel;
}


export const test = base.extend<TestFixture>({
    loginPage: async({page}, use) =>{
        await use(new LoginPage(page));
    },
    homePage: async({page}, use) => {
        await use(new HomePage(page));
    },
    adminPanel: async({page}, use) => {
        await use(new AdminPanel(page));
    }
})

export {expect} from '@playwright/test';







