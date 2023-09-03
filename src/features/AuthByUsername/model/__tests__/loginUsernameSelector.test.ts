import { DeepPartial } from '@reduxjs/toolkit';
import { ApplicationState } from 'app/providers/StoreProvider';

import { loginUsernameSelector } from '../selectors/loginUsernameSelector';

describe('loginUsernameSelector', () => {
    it('should return username', () => {
        const state: DeepPartial<ApplicationState> = {
            login: {
                username: 'username',
            },
        };

        const result = loginUsernameSelector(state as ApplicationState);

        expect(result).toBe('username');
    });

    it('should return an empty string if username field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            login: {},
        };

        const result = loginUsernameSelector(state as ApplicationState);

        expect(result).toBe('');
    });
});
