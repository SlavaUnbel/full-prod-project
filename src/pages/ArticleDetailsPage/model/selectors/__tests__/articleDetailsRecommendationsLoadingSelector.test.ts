import { ApplicationState } from '@/app/providers/StoreProvider';

import { articleDetailsRecommendationsLoadingSelector } from '../articleDetailsRecommendationsSelector';

describe('articleDetailsRecommendationsLoadingSelector', () => {
    it('should return true if the articleDetails data is loading', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetailsPage: {
                recommendations: {
                    isLoading: true,
                },
            },
        };

        const result = articleDetailsRecommendationsLoadingSelector(state as ApplicationState);

        expect(result).toBeTruthy();
    });

    it('should return false if isLoading field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetailsPage: {
                recommendations: {},
            },
        };

        const result = articleDetailsRecommendationsLoadingSelector(state as ApplicationState);

        expect(result).toBeFalsy();
    });
});
