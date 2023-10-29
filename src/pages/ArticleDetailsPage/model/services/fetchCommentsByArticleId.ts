import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import i18n from 'shared/config/i18n/i18n';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetailsComments/fetchCommentsByArticleId',
    async (articleId, { extra, rejectWithValue }) => {
        const { api } = extra;

        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const { data } = await api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!data) {
                throw new Error('No response received');
            }

            return data;
        } catch (error) {
            return rejectWithValue(i18n.t('An error has occured on comments loading'));
        }
    },
);
