export { ArticleDetailsCommentsSchema } from './model/types/articleDetails';

export {
    articleDetailsCommentsReducer,
    getArticleComments,
} from './model/slice/articleDetailsCommentsSlice';

export {
    articleDetailsCommentsLoadingSelector,
    articleDetailsCommentsErrorSelector,
} from './model/selectors/articleDetailsCommentsSelector';

export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId';

export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage.async';
