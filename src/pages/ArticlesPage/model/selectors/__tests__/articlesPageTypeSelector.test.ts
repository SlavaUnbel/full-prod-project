import { ApplicationState } from 'app/providers/StoreProvider';

import { ArticleType } from 'entities/Article';
import { articlesPageTypeSelector } from '../articlesPageSelector';

describe('articlesPageTypeSelector', () => {
    it('should return the type of articles', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                type: ArticleType.IT,
            },
        };

        const result = articlesPageTypeSelector(state as ApplicationState);

        expect(result).toBe(ArticleType.IT);
    });

    it('should return default type field if it is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageTypeSelector(state as ApplicationState);

        expect(result).toBe(ArticleType.ALL);
    });
});
