import { ApplicationState } from 'app/providers/StoreProvider';

import { articleDetailsErrorSelector } from '../articleDetailsSelector';

describe('articleDetailsErrorSelector', () => {
    it('should return the error text if the articleDetails data has not been loaded due to a server error', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetails: {
                error: 'error',
            },
        };

        const result = articleDetailsErrorSelector(state as ApplicationState);

        expect(result).toBe('error');
    });

    it('should return undefined if error field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetails: {},
        };

        const result = articleDetailsErrorSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
