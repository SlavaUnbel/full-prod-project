import { ApplicationState } from 'app/providers/StoreProvider';

import { articlesPageOrderSelector } from '../articlesPageSelector';

describe('articlesPageOrderSelector', () => {
    it('should return the sort order of articles', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                order: 'asc',
            },
        };

        const result = articlesPageOrderSelector(state as ApplicationState);

        expect(result).toBe('asc');
    });

    it('should return default order if it is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageOrderSelector(state as ApplicationState);

        expect(result).toBe('asc');
    });
});
