import { userAuthDataSelector } from '../userSelector';

import { ApplicationState } from '@/app/providers/StoreProvider';

const authData = {
    id: '1',
    username: 'admin',
};

describe('userAuthDataSelector', () => {
    it('should return data', () => {
        const state: DeepPartial<ApplicationState> = {
            user: {
                authData,
            },
        };

        const result = userAuthDataSelector(state as ApplicationState);

        expect(result).toBe(authData);
    });

    it('should return undefined if user state is empty', () => {
        const state: DeepPartial<ApplicationState> = {
            user: {},
        };

        const result = userAuthDataSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
