import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui';
import { TextSize } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Translations } from 'shared/lib/translations/translations';
import { Article, ArticleView } from '../../model/types/article';
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import styles from './ArticlesList.module.scss';

interface ArticlesListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
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
    target,
}: ArticlesListProps) => {
    const { t } = useTranslation(Translations.ARTICLES);

    const renderArticle = (article: Article) => (
        <ArticlesListItem
            key={article.id}
            article={article}
            view={view}
            className={styles.card}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.articlesList, {
                mods: {},
                additional: [className],
            })}
            >
                <Text size={TextSize.L} title={t('Articles not found')} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.articlesList, {
            mods: {},
            additional: [className],
        })}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}

            {isLoading && getSkeletons(view)}
        </div>
    );
});
