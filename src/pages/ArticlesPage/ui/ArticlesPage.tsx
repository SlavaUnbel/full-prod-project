import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
    articlesPageLoadingSelector,
    articlesPageViewSelector,
} from '../model/selectors/articlesPageSelector';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage';
import {
    articlesPageReducer,
    getArticles,
} from '../model/slice/articlesPageSlice';

import { ArticlesList, ArticlesPageFilters } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Page } from '@/widgets/Page';

import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    useDynamicModuleLoader({
        reducers: { articlesPage: articlesPageReducer },
        removeOnUnmount: false,
    });

    const [searchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(articlesPageLoadingSelector);
    const view = useSelector(articlesPageViewSelector);

    const handleLoadNextArticles = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <Page
            onScrollEnd={handleLoadNextArticles}
            className={classNames(styles.articlePage, {
                additional: [className],
            })}
            dataTestId="articles-page"
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
