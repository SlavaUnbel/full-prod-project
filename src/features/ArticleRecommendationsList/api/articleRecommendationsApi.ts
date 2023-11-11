import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRecommendstionsList: builder.query<Article[], { limit: number }>({
            query: ({ limit }) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useGetArticleRecommendstionsListQuery } = recommendationsApi;
