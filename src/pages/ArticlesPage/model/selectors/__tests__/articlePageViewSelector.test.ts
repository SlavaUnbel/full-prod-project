import { ApplicationState } from '@/app/providers/StoreProvider';

import { ArticleView } from '@/entities/Article';
import { articlesPageViewSelector } from '../articlesPageSelector';

describe('articlesPageViewSelector', () => {
    it('should return the view', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                view: ArticleView.BIG,
            },
        };

        const result = articlesPageViewSelector(state as ApplicationState);

        expect(result).toBe(ArticleView.BIG);
    });

    it('should return small view if view field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageViewSelector(state as ApplicationState);

        expect(result).toBe(ArticleView.SMALL);
    });
});
