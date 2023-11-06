import {
    articlesPageActions,
    articlesPageOrderSelector,
    articlesPageSearchSelector,
    articlesPageSortSelector,
    articlesPageTypeSelector,
    articlesPageViewSelector,
    fetchArticlesList,
} from 'pages/ArticlesPage';
import {
    FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { Translations } from 'shared/lib/translations/translations';
import { SortOrder } from 'shared/types';
import { Card, Input } from 'shared/ui';
import { TabItem } from 'shared/ui/Tabs';

import { ArticleSortField, ArticleType, ArticleView } from '../../model/types/article';
import { ArticleSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import { ArticleViewToggle } from '../ArticleViewToggle/ArticleViewToggle';
import styles from './ArticlesPageFilters.module.scss';
import { ArticlesTypesTabs } from '../ArticlesTypesTabs/ArticlesTypesTabs';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(({
    className,
}: ArticlesPageFiltersProps) => {
    const { t } = useTranslation(Translations.ARTICLES);

    const dispatch = useAppDispatch();

    const view = useSelector(articlesPageViewSelector);
    const sort = useSelector(articlesPageSortSelector);
    const order = useSelector(articlesPageOrderSelector);
    const search = useSelector(articlesPageSearchSelector);
    const type = useSelector(articlesPageTypeSelector);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const handleChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        debouncedFetchData();
    }, [dispatch, debouncedFetchData]);

    const handleChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(styles.articlesPageFilters, {
            mods: {},
            additional: [className],
        })}
        >
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={handleChangeSort}
                    onChangeOrder={handleChangeOrder}
                />

                <ArticleViewToggle view={view} onViewClick={handleChangeView} />
            </div>

            <Card className={styles.searchWrapper}>
                <Input placeholder={t('Search')} value={search} onChange={handleChangeSearch} />
            </Card>

            <ArticlesTypesTabs value={type} onChangeType={handleChangeType} />
        </div>
    );
});