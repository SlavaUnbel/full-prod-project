import { ApplicationState } from 'app/providers/StoreProvider';

import { addCommentFormErrorSelector } from '../addCommentFormSelector';

describe('addCommentFormErrorSelector', () => {
    it('should return the error text if the addCommentForm data has not been loaded due to a server error', () => {
        const state: DeepPartial<ApplicationState> = {
            addCommentForm: {
                error: 'error',
            },
        };

        const result = addCommentFormErrorSelector(state as ApplicationState);

        expect(result).toBe('error');
    });

    it('should return undefined if error field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            addCommentForm: {},
        };

        const result = addCommentFormErrorSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
