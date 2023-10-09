import { ApplicationState } from 'app/providers/StoreProvider';

import { profileErrorSelector } from '../profileSelector';

describe('profileErrorSelector', () => {
    it('should return the error text if the profile data has not been loaded due to a server error', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {
                error: 'error',
            },
        };

        const result = profileErrorSelector(state as ApplicationState);

        expect(result).toBe('error');
    });

    it('should return undefined if error field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {},
        };

        const result = profileErrorSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
