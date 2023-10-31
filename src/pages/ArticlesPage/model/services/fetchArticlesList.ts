import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';

export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (_, { extra, rejectWithValue }) => {
        const { api } = extra;

        try {
            const { data } = await api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
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
