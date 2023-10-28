import { ApplicationState } from 'app/providers/StoreProvider';

import { articleDetailsLoadingSelector } from '../articleDetailsSelector';

describe('articleDetailsLoadingSelector', () => {
    it('should return true if the articleDetails data is loading', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetails: {
                isLoading: true,
            },
        };

        const result = articleDetailsLoadingSelector(state as ApplicationState);

        expect(result).toBeTruthy();
    });

    it('should return false if isLoading field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetails: {},
        };

        const result = articleDetailsLoadingSelector(state as ApplicationState);

        expect(result).toBeFalsy();
    });
});
