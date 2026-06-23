import { Locator, Page } from "@playwright/test";

export class AdminPanel{

    private readonly addNewUser: Locator;
    private readonly userRole: Locator;
    private readonly employeeName: Locator;
    private readonly userStatus: Locator;
    private readonly userName: Locator;
    private readonly password: Locator;
    private readonly confirmPassword: Locator;


    constructor(private page: Page){
        this.addNewUser = page.getByRole('button', {name: 'Add'});
        this.userRole = page.locator('.oxd-input-group').filter({hasText: 'User Role'});
        this.employeeName = page.getByPlaceholder('Type for hints...');
        this.userStatus = page.locator('.oxd-input-group').filter({hasText: 'Status'});
        this.userName = page.getByRole('textbox').filter({hasText: 'Username'});
        this.password = page.locator('oxd-input').filter({hasText: 'Password'});
        this.confirmPassword = page.locator('oxd-input').filter({hasText: 'Confirm Password'});
    }

    async clickAddUser(){
        await this.addNewUser.click();
    }

    async selectUserRole( UserRole: string){
        await this.userRole.click();
        await this.page.getByText(UserRole, {exact: true}).click();
    } 

    async enterEmployeeName(EmployeeName: string){
        await this.employeeName.fill(EmployeeName);
    }

    async selectUserStatus(UserStatus: string){
        await this.userStatus.click();
        await this.page.getByText(UserStatus, {exact: true}).click();
    }

    async enterUserName(UserName: string){
        await this.userName.fill(UserName)
    }

    async enterPassword(Password: string){
        await this.password.fill(Password);
    }

    async enterConfirmPassword(ConfirmPassword: string){
        await this.confirmPassword.fill(ConfirmPassword);
    }

    


}