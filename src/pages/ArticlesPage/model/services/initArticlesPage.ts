import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageInitedSelector } from '../selectors/articlesPageSelector';
import { articlesPageActions } from '../slice/articlesPageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (_, { getState, dispatch }) => {
            const state = getState();

            const inited = articlesPageInitedSelector(state);

            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
