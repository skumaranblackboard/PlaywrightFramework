import { request as playwrightRequest, APIRequestContext } from '@playwright/test';

const SERVICE = process.env.MOODLE_SERVICE || 'moodle_mobile_app';

// Cached per process. Playwright workers are separate processes, so each worker
// mints its own token once and reuses it for the rest of that worker's tests.
let cached: string | undefined;

/**
 * Obtain a Moodle web-service token at runtime from /login/token.php.
 *
 * The public sandbox (sandbox.moodledemo.net) resets hourly and wipes any
 * manually created token, so a static token cannot be relied on. Fetching with
 * username/password each run yields a fresh, valid token instead.
 *
 * @param ctx Optional existing request context to reuse. If omitted, a
 *            temporary one is created and disposed.
 */
export async function fetchMoodleToken(ctx?: APIRequestContext): Promise<string> {
    if (cached) return cached;

    const baseURL = process.env.BASE_URL;
    const username = process.env.MOODLE_USERNAME;
    const password = process.env.MOODLE_PASSWORD;

    if (!username || !password) {
        throw new Error(
            'MOODLE_USERNAME and MOODLE_PASSWORD must be set to fetch a Moodle token ' +
            '(dynamic token fetch is required for the hourly-resetting sandbox).',
        );
    }

    const ownsContext = !ctx;
    const request = ctx ?? (await playwrightRequest.newContext({ baseURL }));

    try {
        const response = await request.get('/login/token.php', {
            params: { username, password, service: SERVICE },
        });
        const body = await response.json();

        if (body.error) {
            throw new Error(
                `Failed to obtain Moodle token (service "${SERVICE}"): ${body.error}` +
                (body.errorcode ? ` [${body.errorcode}]` : ''),
            );
        }
        if (!body.token) {
            throw new Error(`Moodle token endpoint returned no token: ${JSON.stringify(body)}`);
        }

        cached = body.token as string;
        return cached;
    } finally {
        if (ownsContext) await request.dispose();
    }
}
