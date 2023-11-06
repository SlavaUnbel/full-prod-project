import { ArticlesList, ArticlesPageFilters } from 'entities/Article';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'widgets/Page';

import { useSearchParams } from 'react-router-dom';
import {
    articlesPageErrorSelector,
    articlesPageLoadingSelector,
    articlesPageSearchSelector,
    articlesPageViewSelector,
} from '../model/selectors/articlesPageSelector';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage';
import { articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    useDynamicModuleLoader({
        reducers: { articlesPage: articlesPageReducer },
        removeOnUnmount: false,
    });

    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(articlesPageLoadingSelector);
    const error = useSelector(articlesPageErrorSelector);
    const view = useSelector(articlesPageViewSelector);
    const search = useSelector(articlesPageSearchSelector);

    const handleLoadNextArticles = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, [search]);

    return (
        <Page
            onScrollEnd={handleLoadNextArticles}
            className={classNames(styles.articlePage, {
                mods: {},
                additional: [className],
            })}
        >
            <ArticlesPageFilters />

            <ArticlesList
                articles={articles}
                view={view}
                isLoading={isLoading}
            />
        </Page>
    );
};

export default ArticlesPage;
