import { ArticlesList, ArticleView, ArticleViewToggle } from 'entities/Article';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Translations } from 'shared/lib/translations/translations';
import { Page } from 'shared/ui';

import {
    articlesPageErrorSelector,
    articlesPageLoadingSelector,
    articlesPageViewSelector,
} from '../model/selectors/articlesPageSelector';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation(Translations.ARTICLES);

    useDynamicModuleLoader({ reducers: { articlesPage: articlesPageReducer } });

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(articlesPageLoadingSelector);
    const error = useSelector(articlesPageErrorSelector);
    const view = useSelector(articlesPageViewSelector);

    const handleLoadNextArticles = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({}));
    }, [view]);

    const handleChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <Page
            onScrollEnd={handleLoadNextArticles}
            className={classNames(styles.articlePage, {
                mods: {},
                additional: [className],
            })}
        >
            <ArticleViewToggle view={view} onViewClick={handleChangeView} />

            <ArticlesList
                articles={articles}
                view={view}
                isLoading={isLoading}
            />
        </Page>
    );
};

export default ArticlesPage;
