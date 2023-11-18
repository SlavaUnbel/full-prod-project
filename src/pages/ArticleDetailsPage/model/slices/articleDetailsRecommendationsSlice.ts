import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ApplicationState } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

import { fetchArticlesRecommendations } from '../services/fetchArticlesRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/articleDetails';

const articleRecommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = articleRecommendationsAdapter.getSelectors<ApplicationState>(
    (state) => state.articleDetailsPage?.recommendations
     || articleRecommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendations',
    initialState:
    articleRecommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                articleRecommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice;
