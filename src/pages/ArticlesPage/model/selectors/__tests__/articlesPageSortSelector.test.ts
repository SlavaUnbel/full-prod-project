import { articlesPageSortSelector } from '../articlesPageSelector';

import { ApplicationState } from '@/app/providers/StoreProvider';
import { ArticleSortField } from '@/entities/Article';

describe('articlesPageSortSelector', () => {
    it('should return the sorting field of articles', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                sort: ArticleSortField.TITLE,
            },
        };

        const result = articlesPageSortSelector(state as ApplicationState);

        expect(result).toBe(ArticleSortField.TITLE);
    });

    it('should return default sorting field if it is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageSortSelector(state as ApplicationState);

        expect(result).toBe(ArticleSortField.CREATED);
    });
});
