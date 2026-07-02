import {test as base} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { AdminPanel } from "../pages/AdminPanel";
import { OrangeHRMApi } from "../api/OrangeHRMApi";
import { PimPage } from "../pages/PimPage";
import { LeavePage } from "../pages/LeavePage";
import { DirectoryPage } from "../pages/DirectoryPage";



type TestFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
    adminPanel: AdminPanel;
    api: OrangeHRMApi;
    pimPage: PimPage;
    leavePage: LeavePage;
    directoryPage: DirectoryPage;
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
    },
    api: async({page}, use) => {
        await use(new OrangeHRMApi(page));
    },
    pimPage: async({page}, use) => {
        await use(new PimPage(page));
    },
    leavePage: async({page}, use) => {
        await use(new LeavePage(page));
    },
    directoryPage: async({page}, use) => {
        await use(new DirectoryPage(page));
    },
})

export {expect} from '@playwright/test';







