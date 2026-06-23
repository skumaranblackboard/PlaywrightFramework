# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.ts >> Orange HRMS Login >> Admin Login
- Location: src/tests/LoginPage.spec.ts:7:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-test="password"]')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { createLogger, Logger } from '../utility/logger';
  3  | 
  4  | 
  5  | /**
  6  |  * TTACart login screen.
  7  |  *
  8  |  *   const login = new LoginPage(page);
  9  |  *   await login.open();
  10 |  *   await login.loginAs('standard_user', 'tta_secret');
  11 |  */
  12 | 
  13 | 
  14 | 
  15 | export class LoginPage {
  16 | 
  17 |     static readonly PATH = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
  18 | 
  19 |     private readonly page: Page;
  20 |     private readonly log: Logger;
  21 |     private readonly usernameInput: Locator;
  22 |     private readonly passwordInput: Locator;
  23 |     private readonly loginButton: Locator;
  24 |     private readonly errorBox: Locator;
  25 |     private readonly loginCredentialsHint: Locator;
  26 | 
  27 |     constructor(page: Page) {
  28 |         this.page = page;
  29 |         this.log = createLogger('LoginPage');
  30 |         this.usernameInput = page.locator('[placeholder="Username"]');
  31 |         this.passwordInput = page.locator('[data-test="password"]');
  32 |         this.loginButton = page.locator('[data-test="login-button"]');
  33 |         this.errorBox = page.locator('[data-test="error"]');
  34 |         this.loginCredentialsHint = page.locator('[data-test="login-credentials"]');
  35 |     }
  36 | 
  37 |     async open(): Promise<void> {
  38 |         await this.page.goto(LoginPage.PATH);
  39 |     }
  40 | 
  41 |     async loginAs(username: string, password: string): Promise<void> {
  42 |         this.log.info(`loginAs ${username}`);
  43 |         await this.usernameInput.fill(username);
> 44 |         await this.passwordInput.fill(password);
     |                                  ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  45 |         await this.loginButton.click();
  46 |     }
  47 | 
  48 | 
  49 | 
  50 | }
```