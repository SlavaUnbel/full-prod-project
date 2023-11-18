import { ApplicationState } from '@/app/providers/StoreProvider';

import { articlesPageInitedSelector } from '../articlesPageSelector';

describe('articlesPageInitedSelector', () => {
    it('should be truthy', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {
                _inited: true,
            },
        };

        const result = articlesPageInitedSelector(state as ApplicationState);

        expect(result).toBeTruthy();
    });

    it('should return undefined if _inited field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articlesPage: {},
        };

        const result = articlesPageInitedSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
