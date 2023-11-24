import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    articlesPageLimitSelector,
    articlesPageOrderSelector,
    articlesPagePageSelector,
    articlesPageSearchSelector,
    articlesPageSortSelector,
    articlesPageTypeSelector,
} from '../selectors/articlesPageSelector';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import i18n from '@/shared/config/i18n/i18n';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';

export const fetchArticlesList = createAsyncThunk<
    Article[],
    { replace?: boolean },
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (_, { extra, getState, rejectWithValue }) => {
        const { api } = extra;
        const state = getState();

        const limit = articlesPageLimitSelector(state);
        const page = articlesPagePageSelector(state);
        const sort = articlesPageSortSelector(state);
        const order = articlesPageOrderSelector(state);
        const search = articlesPageSearchSelector(state);
        const type = articlesPageTypeSelector(state);

        try {
            addQueryParams({
                sort,
                order,
                ...(type ? { type } : {}),
                ...(search ? { search } : {}),
            });

            const { data } = await api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    ...(search ? { q: search } : {}),
                    ...(type !== ArticleType.ALL ? { type_like: type } : {}),
                },
            });

            if (!data) {
                throw new Error('No response received');
            }

            return data;
        } catch (error) {
            return rejectWithValue(
                i18n.t('An error has occured on articles loading'),
            );
        }
    },
);
