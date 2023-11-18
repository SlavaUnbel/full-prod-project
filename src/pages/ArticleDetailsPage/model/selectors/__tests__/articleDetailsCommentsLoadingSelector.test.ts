import { ApplicationState } from '@/app/providers/StoreProvider';

import { articleDetailsCommentsLoadingSelector } from '../articleDetailsCommentsSelector';

describe('articleDetailsCommentsLoadingSelector', () => {
    it('should return true if the articleDetails data is loading', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetailsPage: {
                comments: {
                    isLoading: true,
                },
            },
        };

        const result = articleDetailsCommentsLoadingSelector(state as ApplicationState);

        expect(result).toBeTruthy();
    });

    it('should return false if isLoading field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetailsPage: {
                comments: {},
            },
        };

        const result = articleDetailsCommentsLoadingSelector(state as ApplicationState);

        expect(result).toBeFalsy();
    });
});
