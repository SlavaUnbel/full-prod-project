import { ApplicationState } from '@/app/providers/StoreProvider';

export const articleDetailsRecommendationsStateSelector = (state: ApplicationState) => state.articleDetailsPage?.recommendations;

export const articleDetailsRecommendationsLoadingSelector = (state: ApplicationState) => articleDetailsRecommendationsStateSelector(state)?.isLoading;

export const articleDetailsRecommendationsErrorSelector = (state: ApplicationState) => articleDetailsRecommendationsStateSelector(state)?.error;
