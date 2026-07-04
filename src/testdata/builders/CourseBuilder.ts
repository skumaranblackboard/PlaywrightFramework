import Chance from 'chance';

const chance = new Chance();

export interface CoursePayload {
    shortname: string;
    fullname: string;
    categoryid: number;
}

export function generateCourse(overrides: Partial<CoursePayload> = {}): CoursePayload {
    return {
        shortname: `crs_${chance.string({ length: 6, pool: 'abcdefghijklmnopqrstuvwxyz0123456789' })}`,
        fullname: chance.sentence({ words: 3 }).replace('.', ''),
        categoryid: 1,
        ...overrides,
    };
}
