import { ApplicationState } from '@/app/providers/StoreProvider';

export const articleDetailsStateSelector = (state: ApplicationState) => state.articleDetails;

export const articleDetailsDataSelector = (state: ApplicationState) => articleDetailsStateSelector(state)?.data;

export const articleDetailsLoadingSelector = (state: ApplicationState) => articleDetailsStateSelector(state)?.isLoading;

export const articleDetailsErrorSelector = (state: ApplicationState) => articleDetailsStateSelector(state)?.error;
