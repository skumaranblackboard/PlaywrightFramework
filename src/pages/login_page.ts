import { Locator, Page, test } from '@playwright/test';

export class LoginPage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(private page: Page) {
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#loginbtn');
        this.errorMessage = page.locator('.loginerrors');
    }

    async open(): Promise<void> {
        await test.step('Navigate to Moodle login page', async () => {
            await this.page.goto('/login/index.php');
        });
    }

    async loginAs(username: string, password: string): Promise<void> {
        await test.step(`Login as ${username}`, async () => {
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
        });
    }

    async getErrorMessage(): Promise<Locator> {
        return test.step('Get login error message', async () => {
            return this.errorMessage;
        });
    }
}
