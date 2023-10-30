import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import styles from './ArticlesList.module.scss';

interface ArticlesListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    const mapViewToAmount = {
        [ArticleView.SMALL]: 9,
        [ArticleView.BIG]: 3,
    };

    return new Array(mapViewToAmount[view])
        .fill(0)
        .map((item, index) => (
            <ArticlesListItemSkeleton className={styles.card} key={index} view={view} />
        ));
};

export const ArticlesList: FC<ArticlesListProps> = memo(({
    articles,
    className,
    isLoading,
    view = ArticleView.SMALL,
}: ArticlesListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(styles.articlesList, {
                mods: {},
                additional: [className],
            })}
            >
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticlesListItem
            key={article.id}
            article={article}
            view={view}
            className={styles.card}
        />
    );

    return (
        <div className={classNames(styles.articlesList, {
            mods: {},
            additional: [className],
        })}
        >
            {articles.length ? articles.map(renderArticle) : null}
        </div>
    );
});
