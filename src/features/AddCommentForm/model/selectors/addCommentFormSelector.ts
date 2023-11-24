import { ApplicationState } from '@/app/providers/StoreProvider';

export const addCommentFormStateSelector = (state: ApplicationState) =>
    state.addCommentForm;

export const addCommentFormTextSelector = (state: ApplicationState) =>
    addCommentFormStateSelector(state)?.text ?? '';

export const addCommentFormErrorSelector = (state: ApplicationState) =>
    addCommentFormStateSelector(state)?.error;
