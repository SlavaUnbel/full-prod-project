import { ApplicationState } from 'app/providers/StoreProvider';

import { articlesPageHasMoreSelector } from '../articlesPageSelector';

describe('articlesPageHasMoreSelector', () => {
    it('should be falsy when hasMore field is set to false', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                hasMore: false,
            },
        };

        const result = articlesPageHasMoreSelector(state as ApplicationState);

        expect(result).toBeFalsy();
    });

    it('should return undefined if hasMore field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageHasMoreSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
