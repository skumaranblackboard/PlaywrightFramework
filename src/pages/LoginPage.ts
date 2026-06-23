import { Locator, Page } from '@playwright/test';
import { createLogger, Logger } from '../utility/logger';

export class LoginPage {

    static readonly PATH = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

    // private readonly page: Page;
    private readonly log: Logger;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorBox: Locator;
    private readonly loginCredentialsHint: Locator;

    constructor(private page: Page) {
        this.log = createLogger('LoginPage');
        this.usernameInput = page.locator('[placeholder="Username"]');
        this.passwordInput = page.locator('[placeholder="Password"]');
        this.loginButton = page.getByRole('button', {name: 'Login'} );
        this.errorBox = page.locator('[data-test="error"]');
        this.loginCredentialsHint = page.locator('[data-test="login-credentials"]');
    }

    async open(){
        await this.page.goto(LoginPage.PATH);
    }

    async loginAs(username: string, password: string): Promise<void> {
        this.log.info(`loginAs ${username}`);
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }



}