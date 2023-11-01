import { ApplicationState } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const articlesPageStateSelector = (state: ApplicationState) => state.articlesPage;

export const articlesPageViewSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.view || ArticleView.SMALL;

export const articlesPageLoadingSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.isLoading;

export const articlesPageErrorSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.error;

export const articlesPagePageSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.page || 1;

export const articlesPageLimitSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.limit || 9;

export const articlesPageHasMoreSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.hasMore;
