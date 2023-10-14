import { ApplicationState } from 'app/providers/StoreProvider';

import { userInitedSelector } from '../userSelector';

describe('userInitedSelector', () => {
    it('should be truthy', () => {
        const state: DeepPartial<ApplicationState> = {
            user: {
                _inited: true,
            },
        };

        const result = userInitedSelector(state as ApplicationState);

        expect(result).toBeTruthy();
    });

    it('should return undefined if user state is empty', () => {
        const state: DeepPartial<ApplicationState> = {
            user: {},
        };

        const result = userInitedSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
