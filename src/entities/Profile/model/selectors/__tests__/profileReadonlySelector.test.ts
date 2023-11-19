import { profileReadonlySelector } from '../profileSelector';

import { ApplicationState } from '@/app/providers/StoreProvider';

describe('profileReadonlySelector', () => {
    it('should return true if the profile data is readonly', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {
                readonly: true,
            },
        };

        const result = profileReadonlySelector(state as ApplicationState);

        expect(result).toBeTruthy();
    });

    it('should return undefined if isLoading field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {},
        };

        const result = profileReadonlySelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
