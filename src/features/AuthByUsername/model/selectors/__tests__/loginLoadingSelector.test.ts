import { ApplicationState } from 'app/providers/StoreProvider';

import { loginLoadingSelector } from '../loginLoadingSelector';

describe('loginLoadingSelector', () => {
    it('should return true', () => {
        const state: DeepPartial<ApplicationState> = {
            login: {
                isLoading: true,
            },
        };

        const result = loginLoadingSelector(state as ApplicationState);

        expect(result).toBeTruthy();
    });

    it('should return false if isLoading field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            login: {},
        };

        const result = loginLoadingSelector(state as ApplicationState);

        expect(result).toBeFalsy();
    });
});
