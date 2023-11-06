export {
    ArticleDetailsCommentsSchema,
    ArticleDetailsRecommendationsSchema,
    ArticleDetailsPageSchema,
} from './model/types/articleDetails';

export { getArticleComments } from './model/slices/articleDetailsCommentsSlice';
export { getArticleRecommendations } from './model/slices/articleDetailsRecommendationsSlice';
export { articleDetailsPageReducer } from './model/slices';

export {
    articleDetailsCommentsLoadingSelector,
    articleDetailsCommentsErrorSelector,
} from './model/selectors/articleDetailsCommentsSelector';

export {
    articleDetailsRecommendationsLoadingSelector,
    articleDetailsRecommendationsErrorSelector,
} from './model/selectors/articleDetailsRecommendationsSelector';

export { articleDetailsCanEditArticleSelector } from './model/selectors/articleDetailsSelector';

export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId';
export { sendCommentForArticle } from './model/services/sendCommentForArticle';
export { fetchArticlesRecommendations } from './model/services/fetchArticlesRecommendations';

export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage.async';
