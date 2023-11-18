import { ApplicationState } from '@/app/providers/StoreProvider';

import { articlesPageSearchSelector } from '../articlesPageSelector';

describe('articlesPageSearchSelector', () => {
    it('should return the search field', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                search: 'search query',
            },
        };

        const result = articlesPageSearchSelector(state as ApplicationState);

        expect(result).toBe('search query');
    });

    it('should return an empty string if search field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageSearchSelector(state as ApplicationState);

        expect(result).toBe('');
    });
});
