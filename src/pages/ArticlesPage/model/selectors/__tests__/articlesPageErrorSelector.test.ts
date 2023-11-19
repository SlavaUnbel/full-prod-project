import { articlesPageErrorSelector } from '../articlesPageSelector';

import { ApplicationState } from '@/app/providers/StoreProvider';

describe('articlesPageErrorSelector', () => {
    it('should return the error text if the articlesPage data has not been loaded due to a server error', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                error: 'error',
            },
        };

        const result = articlesPageErrorSelector(state as ApplicationState);

        expect(result).toBe('error');
    });

    it('should return undefined if error field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageErrorSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
