import { ApplicationState } from '@/app/providers/StoreProvider';

export const articleDetailsCommentsStateSelector = (state: ApplicationState) =>
    state.articleDetailsPage?.comments;

export const articleDetailsCommentsLoadingSelector = (
    state: ApplicationState,
) => articleDetailsCommentsStateSelector(state)?.isLoading;

export const articleDetailsCommentsErrorSelector = (state: ApplicationState) =>
    articleDetailsCommentsStateSelector(state)?.error;
