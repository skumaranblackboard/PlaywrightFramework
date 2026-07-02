import {test} from '../fixtures/baseTest'
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';


test.describe("Orange HRMS Login", () =>{

test("TC001: Admin Login", async({loginPage, homePage}) => {
    await loginPage.open();
    await loginPage.loginAs('Admin', 'admin123');
    await homePage.assertDashboardHeader();
    await homePage.assertUpgradePanel();
})

test("TC002: Open Dashboard", async({loginPage, homePage, adminPanel}) => {
    await loginPage.open();
    await loginPage.loginAs('Admin', 'admin123');
    await homePage.openAdminPanel();
    await adminPanel.clickAddUser();
    await adminPanel.selectUserRole('ESS');
    await adminPanel.selectUserStatus('Enabled')
    await adminPanel.enterUserName('Senth');
    await adminPanel.enterPassword('Senth');
    await adminPanel.enterConfirmPassword('Senth');


})

})