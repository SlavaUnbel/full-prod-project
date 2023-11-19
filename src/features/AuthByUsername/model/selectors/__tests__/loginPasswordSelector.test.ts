import { loginPasswordSelector } from '../loginPasswordSelector';

import { ApplicationState } from '@/app/providers/StoreProvider';

describe('loginPasswordSelector', () => {
    it('should return Password', () => {
        const state: DeepPartial<ApplicationState> = {
            login: {
                password: 'Password',
            },
        };

        const result = loginPasswordSelector(state as ApplicationState);

        expect(result).toBe('Password');
    });

    it('should return an empty string if password field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            login: {},
        };

        const result = loginPasswordSelector(state as ApplicationState);

        expect(result).toBe('');
    });
});
