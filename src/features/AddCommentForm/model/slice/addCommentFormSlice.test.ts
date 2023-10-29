import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
    it('should set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: '' };
        const result = addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('text'),
        );

        expect(result).toEqual({ text: 'text' });
    });
});
