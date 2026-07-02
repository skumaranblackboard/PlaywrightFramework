import { Page } from '@playwright/test';

const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

export interface Employee {
    empNumber: number;
    firstName: string;
    lastName: string;
    employeeId: string;
}

export class OrangeHRMApi {
    constructor(private page: Page) {}

    private async xsrfToken(): Promise<string> {
        const cookies = await this.page.context().cookies();
        const token = cookies.find(c => c.name === 'XSRF-TOKEN');
        return token ? decodeURIComponent(token.value) : '';
    }

    async createEmployee(firstName: string, lastName: string): Promise<Employee> {
        const response = await this.page.request.post(
            `${BASE_URL}/web/index.php/api/v2/pim/employees`,
            {
                headers: { 'X-XSRF-TOKEN': await this.xsrfToken() },
                data: { firstName, middleName: '', lastName, employeeId: '' },
            }
        );
        const body = await response.json();
        return body.data;
    }

    async deleteEmployee(empNumber: number): Promise<void> {
        await this.page.request.delete(
            `${BASE_URL}/web/index.php/api/v2/pim/employees`,
            {
                headers: { 'X-XSRF-TOKEN': await this.xsrfToken() },
                data: { ids: [empNumber] },
            }
        );
    }
}
