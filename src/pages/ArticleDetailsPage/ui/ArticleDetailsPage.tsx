import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Translations } from 'shared/lib/translations/translations';
import { Page } from 'widgets/Page';

import { articleDetailsCommentsLoadingSelector } from '../model/selectors/articleDetailsCommentsSelector';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { sendCommentForArticle } from '../model/services/sendCommentForArticle';
import { articleDetailsPageReducer } from '../model/slices';
import { getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import styles from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation(Translations.ARTICLES);

    const dispatch = useAppDispatch();

    const { id } = useParams<{id: string}>();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsLoading = useSelector(articleDetailsCommentsLoadingSelector);

    useDynamicModuleLoader({
        reducers: { articleDetailsPage: articleDetailsPageReducer },
    });

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const handleSendComment = useCallback((text?: string) => {
        dispatch(sendCommentForArticle(text));
    }, [dispatch]);

    const renderContent = () => {
        if (!id) {
            return t('Article is not found');
        }

        return (
            <>
                <ArticleDetailsPageHeader />

                <ArticleDetails id={id || ''} />

                <ArticleRecommendationsList />

                <AddCommentForm onSendComment={handleSendComment} />

                <CommentList comments={comments} isLoading={commentsLoading} />
            </>
        );
    };

    return (
        <Page className={classNames(styles.articleDetailsPage, { additional: [className] })}>
            {renderContent()}
        </Page>
    );
};

export default ArticleDetailsPage;
