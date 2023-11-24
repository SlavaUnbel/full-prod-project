import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingsArg {
    userId: string;
    articleId: string;
}

interface RateArticleArg extends GetArticleRatingsArg {
    rate: number;
    feedback?: string;
}

export const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRatings: builder.query<Rating[], GetArticleRatingsArg>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: builder.mutation<void, RateArticleArg>({
            query: (body) => ({
                url: '/article-ratings',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetArticleRatingsQuery, useRateArticleMutation } =
    articleRatingApi;
