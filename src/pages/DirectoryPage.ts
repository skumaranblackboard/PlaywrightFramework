import { Locator, Page } from '@playwright/test';

const DIRECTORY_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory';

export class DirectoryPage {
    readonly employeeCards: Locator;
    private readonly searchNameInput: Locator;
    private readonly searchButton: Locator;

    constructor(private page: Page) {
        this.employeeCards = page.locator('.orangehrm-directory-card');
        this.searchNameInput = page.getByPlaceholder('Type for hints...');
        this.searchButton = page.getByRole('button', { name: 'Search' });
    }

    async navigate() {
        await this.page.goto(DIRECTORY_URL);
    }

    async searchByName(name: string) {
        await this.searchNameInput.fill(name);
        await this.searchButton.click();
    }

    async resetSearch() {
        await this.page.getByRole('button', { name: 'Reset' }).click();
    }
}
