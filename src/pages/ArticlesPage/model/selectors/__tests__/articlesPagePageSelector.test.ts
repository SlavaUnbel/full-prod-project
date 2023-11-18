import { ApplicationState } from '@/app/providers/StoreProvider';

import { articlesPagePageSelector } from '../articlesPageSelector';

describe('articlesPagePageSelector', () => {
    it('should return the number of page', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                page: 3,
            },
        };

        const result = articlesPagePageSelector(state as ApplicationState);

        expect(result).toBe(3);
    });

    it('should return initial page amount if page field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPagePageSelector(state as ApplicationState);

        expect(result).toBe(1);
    });
});
