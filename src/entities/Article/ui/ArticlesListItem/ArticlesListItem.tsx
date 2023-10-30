import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';
import {
    Avatar, Button, Card, Icon, Text,
} from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';

import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticlesListItem.module.scss';

interface ArticlesListItemProps {
    article: Article;
    view: ArticleView;
    className?: string;
}

export const ArticlesListItem: FC<ArticlesListItemProps> = memo(({
    article,
    view,
    className,
}: ArticlesListItemProps) => {
    const { t } = useTranslation(Translations.ARTICLES);
    const navigate = useNavigate();

    const handleOpenArticle = useCallback(() => {
        navigate(`${RoutePath['article-details']}${article.id}`);
    }, [article.id, navigate]);

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(styles.articlesListItem, {
                mods: {},
                additional: [className, styles[view]],
            })}
            >
                <Card>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={styles.username} />
                        <Text text={article.createdAt} className={styles.date} />
                    </div>

                    <Text title={article.title} className={styles.title} />

                    <Text text={article.type.join(', ')} className={styles.types} />

                    <img src={article.img} className={styles.img} alt={article.title} />

                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
                    )}

                    <div className={styles.footer}>
                        <Button onClick={handleOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Read more...')}
                        </Button>
                        <Text text={String(article.views)} className={styles.views} />
                        <Icon Svg={EyeIcon} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(styles.articlesListItem, {
                mods: {},
                additional: [className, styles[view]],
            })}
        >
            <Card onClick={handleOpenArticle}>
                <div className={styles.imageWrapper}>
                    <img src={article.img} className={styles.img} alt={article.title} />
                    <Text text={article.createdAt} className={styles.date} />
                </div>

                <div className={styles.infoWrapper}>
                    <Text text={article.type.join(',')} className={styles.types} />
                    <Text text={String(article.views)} className={styles.views} />
                    <Icon Svg={EyeIcon} />
                </div>

                <Text text={article.title} className={styles.title} />
            </Card>
        </div>
    );
});
