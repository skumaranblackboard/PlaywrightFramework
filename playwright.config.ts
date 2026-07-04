import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    globalSetup: './src/setup/global-setup',
    globalTeardown: './src/setup/global-teardown',
    testDir: './src/tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 4 : undefined,
    reporter: [['html'], ['allure-playwright']],
    use: {
        baseURL: process.env.BASE_URL,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        headless: !!process.env.CI,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});
