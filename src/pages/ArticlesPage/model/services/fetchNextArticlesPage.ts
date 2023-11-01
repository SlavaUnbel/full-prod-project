import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import {
    articlesPageHasMoreSelector,
    articlesPageLoadingSelector,
    articlesPagePageSelector,
} from '../selectors/articlesPageSelector';
import { articlesPageActions } from '../slice/articlesPageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchNextArticlesPage',
    async (_, { dispatch, getState }) => {
        const state = getState();

        const page = articlesPagePageSelector(state);
        const isLoading = articlesPageLoadingSelector(state);
        const hasMore = articlesPageHasMoreSelector(state);

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({ page: page + 1 }));
        }
    },
);
