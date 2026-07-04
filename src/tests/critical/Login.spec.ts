import { test, expect } from '../../fixtures/base.fixture';
import { DEFAULT_PASSWORD } from '../../testdata/builders/UserBuilder';

test.describe('Login', { tag: '@smoke' }, () => {

    test('Valid credentials redirect to dashboard', async ({ create, cleanup, loginPage, page }) => {
        const env = await (await create.user({ prefix: 'teach' })).exec();
        cleanup.register(env);

        await loginPage.open();
        await loginPage.loginAs(env.user!.username, DEFAULT_PASSWORD);
        await expect(page).toHaveURL(/\/my/);
        await expect(page.locator('.usermenu')).toBeVisible();
    });

    test('Invalid credentials show error message', async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.loginAs('invaliduser99', 'wrongpassword99');
        const error = await loginPage.getErrorMessage();
        await expect(error).toBeVisible();
        await expect(error).toContainText('Invalid login');
    });

});
