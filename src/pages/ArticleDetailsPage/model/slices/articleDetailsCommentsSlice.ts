import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetails';

import { ApplicationState } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

const articleDetailsCommentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = articleDetailsCommentsAdapter.getSelectors<ApplicationState>(
    (state) => state.articleDetailsPage?.comments
    || articleDetailsCommentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                articleDetailsCommentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsCommentsReducer,
} = articleDetailsCommentsSlice;
