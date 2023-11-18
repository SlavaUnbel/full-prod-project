import { ApplicationState } from '@/app/providers/StoreProvider';

import { loginErrorSelector } from '../loginErrorSelector';

describe('loginErrorSelector', () => {
    it('should return error', () => {
        const state: DeepPartial<ApplicationState> = {
            login: {
                error: 'error',
            },
        };

        const result = loginErrorSelector(state as ApplicationState);

        expect(result).toBe('error');
    });

    it('should return undefined if error field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            login: {},
        };

        const result = loginErrorSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
