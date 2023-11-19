import { addCommentFormTextSelector } from '../addCommentFormSelector';

import { ApplicationState } from '@/app/providers/StoreProvider';

describe('addCommentFormTextSelector', () => {
    it('should return the comment form text', () => {
        const state: DeepPartial<ApplicationState> = {
            addCommentForm: {
                text: 'comment',
            },
        };

        const result = addCommentFormTextSelector(state as ApplicationState);

        expect(result).toBe('comment');
    });

    it('should return empty string if text field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            addCommentForm: {},
        };

        const result = addCommentFormTextSelector(state as ApplicationState);

        expect(result).toBe('');
    });
});
