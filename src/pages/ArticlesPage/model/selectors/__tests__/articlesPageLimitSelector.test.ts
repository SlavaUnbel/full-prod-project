import { ApplicationState } from '@/app/providers/StoreProvider';

import { articlesPageLimitSelector } from '../articlesPageSelector';

describe('articlesPageLimitSelector', () => {
    it('should return the limit', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                limit: 10,
            },
        };

        const result = articlesPageLimitSelector(state as ApplicationState);

        expect(result).toBe(10);
    });

    it('should return initial limit amount if limit field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageLimitSelector(state as ApplicationState);

        expect(result).toBe(9);
    });
});
