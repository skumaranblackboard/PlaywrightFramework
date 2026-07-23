import { test as base } from '@playwright/test';
import { MoodleApi } from '../testdata/api/data-api';
import { fetchMoodleToken } from '../testdata/api/token';
import { EnvironmentBuilder, CreatedEnvironment } from '../testdata/builders/EnvironmentBuilder';

export type CleanupRegistrar = {
    register: (env: CreatedEnvironment) => void;
};

export type ApiFixture = {
    create: EnvironmentBuilder;
    cleanup: CleanupRegistrar;
};

export const test = base.extend<ApiFixture>({
    create: async ({ request }, use) => {
        const api = new MoodleApi(request, await fetchMoodleToken(request));
        await use(new EnvironmentBuilder(api));
    },
    cleanup: async ({ request }, use) => {
        const envList: CreatedEnvironment[] = [];

        await use({ register: (env) => envList.push(env) });

        const api = new MoodleApi(request, await fetchMoodleToken(request));
        for (const env of envList) {
            if (env.user?.id) await api.deleteUser(env.user.id);
            if (env.instructor?.id) await api.deleteUser(env.instructor.id);
            if (env.student?.id) await api.deleteUser(env.student.id);
            if (env.course?.id) await api.deleteCourse(env.course.id);
        }
    },
});
