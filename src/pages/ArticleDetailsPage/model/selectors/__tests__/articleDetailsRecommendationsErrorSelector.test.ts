import { ApplicationState } from '@/app/providers/StoreProvider';

import { articleDetailsRecommendationsErrorSelector } from '../articleDetailsRecommendationsSelector';

describe('articleDetailsRecommendationsErrorSelector', () => {
    it('should return the error text if the articleDetailsRecommendations data has not been loaded due to a server error', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetailsPage: {
                recommendations: {
                    error: 'error',
                },
            },
        };

        const result = articleDetailsRecommendationsErrorSelector(state as ApplicationState);

        expect(result).toBe('error');
    });

    it('should return undefined if error field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetailsPage: {
                recommendations: {},
            },
        };

        const result = articleDetailsRecommendationsErrorSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
