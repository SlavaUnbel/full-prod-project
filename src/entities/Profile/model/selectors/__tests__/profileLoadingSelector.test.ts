import { ApplicationState } from 'app/providers/StoreProvider';

import { profileLoadingSelector } from '../profileSelector';

describe('profileLoadingSelector', () => {
    it('should return true if the profile data is loading', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {
                isLoading: true,
            },
        };

        const result = profileLoadingSelector(state as ApplicationState);

        expect(result).toBeTruthy();
    });

    it('should return false if isLoading field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {},
        };

        const result = profileLoadingSelector(state as ApplicationState);

        expect(result).toBeFalsy();
    });
});
