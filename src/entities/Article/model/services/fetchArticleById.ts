import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from '../types/article';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import i18n from '@/shared/config/i18n/i18n';

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async (articleId, { extra, rejectWithValue }) => {
        const { api } = extra;

        try {
            const { data } = await api.get<Article>(`/articles/${articleId}`, {
                params: {
                    _expand: 'user',
                },
            });

            if (!data) {
                throw new Error('No response received');
            }

            return data;
        } catch (error) {
            return rejectWithValue(i18n.t('An error has occured on article loading'));
        }
    },
);
