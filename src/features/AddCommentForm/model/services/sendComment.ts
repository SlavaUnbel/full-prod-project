import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articleDetailsDataSelector } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { userAuthDataSelector } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';

import { addCommentFormTextSelector } from '../selectors/addCommentFormSelector';
import { addCommentFormActions } from '../slice/addCommentFormSlice';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>
>(
    'addCommentForm/sendComment',
    async (_, {
        extra, getState, dispatch, rejectWithValue,
    }) => {
        const { api } = extra;
        const state = getState();

        const userData = userAuthDataSelector(state);
        const text = addCommentFormTextSelector(state);
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

            dispatch(addCommentFormActions.setText(''));

            return data;
        } catch (error) {
            return rejectWithValue(i18n.t('An error has occured on sending comment'));
        }
    },
);
