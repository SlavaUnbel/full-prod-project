import { ApplicationState } from 'app/providers/StoreProvider';

import { articleDetailsCommentsErrorSelector } from '../articleDetailsCommentsSelector';

describe('articleDetailsCommentsErrorSelector', () => {
    it('should return the error text if the articleDetailsComments data has not been loaded due to a server error', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetailsComments: {
                error: 'error',
            },
        };

        const result = articleDetailsCommentsErrorSelector(state as ApplicationState);

        expect(result).toBe('error');
    });

    it('should return undefined if error field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetailsComments: {},
        };

        const result = articleDetailsCommentsErrorSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
