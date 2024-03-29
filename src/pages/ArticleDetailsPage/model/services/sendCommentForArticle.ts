import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articleDetailsDataSelector } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { userAuthDataSelector } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';

export const sendCommentForArticle = createAsyncThunk<
    Comment,
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetails/sendCommentForArticle',
    async (text, { extra, getState, dispatch, rejectWithValue }) => {
        const { api } = extra;
        const state = getState();

        const userData = userAuthDataSelector(state);
        const article = articleDetailsDataSelector(state);

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const { data } = await api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!data) {
                throw new Error('No response received');
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return data;
        } catch (error) {
            return rejectWithValue(i18n.t('Incorrect username or password'));
        }
    },
);
