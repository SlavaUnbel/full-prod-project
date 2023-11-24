import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    ArticleSortField,
    ArticleType,
    ArticleView,
} from '../../model/consts/article';
import { ArticleSortSelector } from '../ArticleSortSelector/ArticleSortSelector';
import { ArticleViewToggle } from '../ArticleViewToggle/ArticleViewToggle';
import { ArticlesTypesTabs } from '../ArticlesTypesTabs/ArticlesTypesTabs';

// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import {
    articlesPageActions,
    articlesPageOrderSelector,
    articlesPageSearchSelector,
    articlesPageSortSelector,
    articlesPageTypeSelector,
    articlesPageViewSelector,
    fetchArticlesList,
} from '@/pages/ArticlesPage';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Translations } from '@/shared/lib/translations/translations';
import { SortOrder } from '@/shared/types';
import { Card, HStack, Input, VStack } from '@/shared/ui';

import styles from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(
    ({ className }: ArticlesPageFiltersProps) => {
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

        const handleChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlesPageActions.setView(view));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const handleChangeSort = useCallback(
            (sort: ArticleSortField) => {
                dispatch(articlesPageActions.setSort(sort));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const handleChangeOrder = useCallback(
            (order: SortOrder) => {
                dispatch(articlesPageActions.setOrder(order));
                fetchData();
            },
            [dispatch, fetchData],
        );

        const handleChangeSearch = useCallback(
            (search: string) => {
                dispatch(articlesPageActions.setSearch(search));
                debouncedFetchData();
            },
            [dispatch, debouncedFetchData],
        );

        const handleChangeType = useCallback(
            (value: ArticleType) => {
                dispatch(articlesPageActions.setType(value));
                fetchData();
            },
            [dispatch, fetchData],
        );

        return (
            <VStack
                max
                gap="gap-m"
                className={classNames(styles.articlesPageFilters, {
                    additional: [className],
                })}
            >
                <HStack max justify="between">
                    <ArticleSortSelector
                        sort={sort}
                        order={order}
                        onChangeSort={handleChangeSort}
                        onChangeOrder={handleChangeOrder}
                    />

                    <ArticleViewToggle
                        view={view}
                        onViewClick={handleChangeView}
                    />
                </HStack>

                <Card className={styles.searchWrapper}>
                    <Input
                        placeholder={t('Search')}
                        value={search}
                        onChange={handleChangeSearch}
                    />
                </Card>

                <ArticlesTypesTabs
                    value={type}
                    onChangeType={handleChangeType}
                />
            </VStack>
        );
    },
);
