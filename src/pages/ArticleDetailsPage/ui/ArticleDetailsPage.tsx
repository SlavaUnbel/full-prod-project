import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Translations } from 'shared/lib/translations/translations';
import { Button, Page, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';

import { articleDetailsCommentsLoadingSelector } from '../model/selectors/articleDetailsCommentsSelector';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { sendCommentForArticle } from '../model/services/sendCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation(Translations.ARTICLES);
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const { id } = useParams<{id: string}>();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsLoading = useSelector(articleDetailsCommentsLoadingSelector);

    useDynamicModuleLoader({
        reducers: { articleDetailsComments: articleDetailsCommentsReducer },
    });

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const handleNavigateBack = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const handleSendComment = useCallback((text?: string) => {
        dispatch(sendCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames(styles.articleDetailsPage, {
                mods: {},
                additional: [className],
            })}
            >
                {t('Article is not found')}
            </div>
        );
    }

    return (
        <Page className={classNames(styles.articleDetailsPage, {
            mods: {},
            additional: [className],
        })}
        >
            <Button theme={ButtonTheme.OUTLINE} onClick={handleNavigateBack}>
                {t('Back to the articles list')}
            </Button>

            <ArticleDetails id={id || ''} />

            <AddCommentForm onSendComment={handleSendComment} />

            <Text title={t('Comments')} className={styles.commentsTitle} />

            <CommentList
                comments={comments}
                isLoading={commentsLoading}
            />
        </Page>
    );
};

export default ArticleDetailsPage;
