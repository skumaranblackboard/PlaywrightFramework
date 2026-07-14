import { expect, Page, test } from '@playwright/test';

export class CoursePage {
    constructor(private page: Page) {}

    async assertCourseVisible(courseName: string): Promise<CoursePage> {
        await test.step(`Assert course "${courseName}" is visible`, async () => {
            await expect(this.page.getByText(courseName)).toBeVisible();
        });
        return this;
    }

    async openCourse(courseName: string): Promise<CoursePage> {
        await test.step(`Open course "${courseName}"`, async () => {
            await this.page.getByRole('link', { name: courseName }).click();
        });
        return this;
    }
}
