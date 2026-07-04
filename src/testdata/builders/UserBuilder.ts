import Chance from 'chance';

const chance = new Chance();

export interface UserPayload {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
}

export const DEFAULT_PASSWORD = 'Test@1234';

export function generateUser(overrides: Partial<UserPayload> = {}, prefix = 'user'): UserPayload {
    const firstname = chance.first();
    const lastname = chance.last();
    return {
        username: `${prefix}_${chance.string({ length: 6, pool: 'abcdefghijklmnopqrstuvwxyz0123456789' })}`,
        password: DEFAULT_PASSWORD,
        firstname,
        lastname,
        email: chance.email({ domain: 'test.com' }),
        ...overrides,
    };
}
