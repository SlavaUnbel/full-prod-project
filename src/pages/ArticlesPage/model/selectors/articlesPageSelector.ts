import { ApplicationState } from '@/app/providers/StoreProvider';
import { ArticleView, ArticleSortField, ArticleType } from '@/entities/Article';

export const articlesPageStateSelector = (state: ApplicationState) => state.articlesPage;

export const articlesPageViewSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.view || ArticleView.SMALL;

export const articlesPageLoadingSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.isLoading;

export const articlesPageErrorSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.error;

export const articlesPagePageSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.page || 1;

export const articlesPageLimitSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.limit || 9;

export const articlesPageHasMoreSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.hasMore;

export const articlesPageOrderSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.order ?? 'asc';

export const articlesPageSortSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.sort ?? ArticleSortField.CREATED;

export const articlesPageSearchSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.search ?? '';

export const articlesPageTypeSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.type ?? ArticleType.ALL;

export const articlesPageInitedSelector = (state: ApplicationState) => articlesPageStateSelector(state)?._inited;
