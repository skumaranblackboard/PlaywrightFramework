import {test} from '../fixtures/baseTest'
import { LoginPage } from '../pages/LoginPage';


test.describe("Orange HRMS Login", () =>{

test("Admin Login", async({page}) => {
    const login = new LoginPage(page);
    await login.open();
    await login.loginAs('Admin', 'admin123');
})

test("Open Dashboard", async({loginPage, homePage, adminPanel}) => {
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