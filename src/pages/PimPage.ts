import { expect, Locator, Page } from '@playwright/test';

const PIM_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule';
const ADD_EMPLOYEE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee';

export class PimPage {
    readonly tableBody: Locator;
    readonly tableHeader: Locator;
    private readonly searchNameInput: Locator;
    private readonly searchIdInput: Locator;
    private readonly searchButton: Locator;
    private readonly addButton: Locator;

    constructor(private page: Page) {
        this.tableBody = page.locator('.oxd-table-body');
        this.tableHeader = page.locator('.oxd-table-header');
        this.searchNameInput = page.getByPlaceholder('Type for hints...').first();
        this.searchIdInput = page.locator('input[placeholder="Employee Id"]');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.addButton = page.getByRole('button', { name: 'Add' });
    }

    async navigate() {
        await this.page.goto(PIM_URL);
    }

    async navigateToAddEmployee() {
        await this.page.goto(ADD_EMPLOYEE_URL);
    }

    async searchByName(name: string) {
        await this.searchNameInput.fill(name);
        await this.searchButton.click();
    }

    async searchById(id: string) {
        await this.searchIdInput.fill(id);
        await this.searchButton.click();
    }

    async clickAdd() {
        await this.addButton.click();
    }

    async getRows() {
        return this.tableBody.locator('.oxd-table-row');
    }

    async assertNoRecords() {
        await expect(this.page.getByText('No Records Found')).toBeVisible();
    }
}
