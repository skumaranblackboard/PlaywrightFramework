import { Locator, Page } from '@playwright/test';

const LEAVE_LIST_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList';
const APPLY_LEAVE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave';
const ENTITLEMENTS_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveEntitlements';

export class LeavePage {
    readonly tableHeader: Locator;
    readonly leaveTypeDropdown: Locator;
    readonly fromDateInput: Locator;
    readonly toDateInput: Locator;

    constructor(private page: Page) {
        this.tableHeader = page.locator('.oxd-table-header');
        this.leaveTypeDropdown = page.locator('.oxd-input-group').filter({ hasText: 'Leave Type' });
        this.fromDateInput = page.locator('input[placeholder="yyyy-dd-mm"]').first();
        this.toDateInput = page.locator('input[placeholder="yyyy-dd-mm"]').last();
    }

    async navigateToLeaveList() {
        await this.page.goto(LEAVE_LIST_URL);
    }

    async navigateToApplyLeave() {
        await this.page.goto(APPLY_LEAVE_URL);
    }

    async navigateToEntitlements() {
        await this.page.goto(ENTITLEMENTS_URL);
    }
}
