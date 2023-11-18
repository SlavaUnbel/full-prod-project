import { ApplicationState } from '@/app/providers/StoreProvider';

import { articlesPageLoadingSelector } from '../articlesPageSelector';

describe('articlesPageLoadingSelector', () => {
    it('should return true if the articlesPage data is loading', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                isLoading: true,
            },
        };

        const result = articlesPageLoadingSelector(state as ApplicationState);

        expect(result).toBeTruthy();
    });

    it('should return false if isLoading field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageLoadingSelector(state as ApplicationState);

        expect(result).toBeFalsy();
    });
});
