import { test, expect } from '../../fixtures/base.fixture';
import { DEFAULT_PASSWORD } from '../../testdata/builders/UserBuilder';

test.describe('Course', { tag: '@smoke' }, () => {

    test('Course created via API with teacher and student is visible in teacher My courses', async ({ create, cleanup, loginPage, page }) => {
        const env = await (await (await (await create.course()).with.instructor()).and.student()).exec();
        cleanup.register(env);

        await loginPage.open();
        await loginPage.loginAs(env.instructor!.username, DEFAULT_PASSWORD);
        await page.goto('/my/courses.php');
        await expect(page.getByRole('link', { name: env.course!.fullname }).first()).toBeVisible();
    });

});
