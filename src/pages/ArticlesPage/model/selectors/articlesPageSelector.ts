import { ApplicationState } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const articlesPageStateSelector = (state: ApplicationState) => state.articlesPage;

export const articlesPageViewSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.view || ArticleView.SMALL;

export const articlesPageLoadingSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.isLoading;

export const articlesPageErrorSelector = (state: ApplicationState) => articlesPageStateSelector(state)?.error;
