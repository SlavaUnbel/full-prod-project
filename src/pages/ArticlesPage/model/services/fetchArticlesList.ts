import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';
import { articlesPageLimitSelector } from '../selectors/articlesPageSelector';

export const fetchArticlesList = createAsyncThunk<
    Article[],
    { page?: number },
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async ({ page = 1 }, { extra, getState, rejectWithValue }) => {
        const { api } = extra;
        const state = getState();

        const limit = articlesPageLimitSelector(state);

        try {
            const { data } = await api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                },
            });

            if (!data) {
                throw new Error('No response received');
            }

            return data;
        } catch (error) {
            return rejectWithValue(i18n.t('An error has occured on articles loading'));
        }
    },
);
