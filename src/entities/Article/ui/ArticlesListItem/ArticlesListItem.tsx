import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleBlockType, ArticleView } from '../../model/consts/article';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Translations } from '@/shared/lib/translations/translations';
import {
    AppLink,
    Avatar,
    Button,
    Card,
    HStack,
    Icon,
    Skeleton,
    Text,
    VStack,
} from '@/shared/ui';
import { AppImage } from '@/shared/ui/AppImage';
import { ButtonTheme } from '@/shared/ui/Button';

import styles from './ArticlesListItem.module.scss';

interface ArticlesListItemProps {
    article: Article;
    view: ArticleView;
    className?: string;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticlesListItem: FC<ArticlesListItemProps> = memo(
    ({ article, view, className, target }: ArticlesListItemProps) => {
        const { t } = useTranslation(Translations.ARTICLES);

        if (view === ArticleView.BIG) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as ArticleTextBlock;

            return (
                <VStack
                    max
                    className={classNames('', {
                        additional: [className, styles[view]],
                    })}
                >
                    <Card>
                        <HStack>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text
                                text={article.user.username}
                                className={styles.username}
                            />
                            <Text
                                text={article.createdAt}
                                className={styles.date}
                            />
                        </HStack>

                        <Text title={article.title} className={styles.title} />

                        <Text
                            text={article.type.join(', ')}
                            className={styles.types}
                        />

                        <AppImage
                            src={article.img}
                            className={styles.img}
                            alt={article.title}
                            fallback={<Skeleton width="100%" height={250} />}
                        />

                        {textBlock && (
                            <ArticleTextBlockComponent
                                block={textBlock}
                                className={styles.textBlock}
                            />
                        )}

                        <HStack className={styles.footer}>
                            <AppLink
                                target={target}
                                to={getRouteArticleDetails(article.id)}
                            >
                                <Button theme={ButtonTheme.OUTLINE}>
                                    {t('Read more...')}
                                </Button>
                            </AppLink>
                            <Text
                                text={String(article.views)}
                                className={styles.views}
                            />
                            <Icon Svg={EyeIcon} />
                        </HStack>
                    </Card>
                </VStack>
            );
        }

        return (
            <AppLink
                target={target}
                to={getRouteArticleDetails(article.id)}
                className={classNames(styles.articlesListItem, {
                    additional: [className, styles[view]],
                })}
            >
                <Card>
                    <HStack className={styles.imageWrapper}>
                        <AppImage
                            src={article.img}
                            className={styles.img}
                            alt={article.title}
                            fallback={<Skeleton width={200} height={200} />}
                        />
                        <Text
                            text={article.createdAt}
                            className={styles.date}
                        />
                    </HStack>

                    <HStack className={styles.infoWrapper}>
                        <Text
                            text={article.type.join(',')}
                            className={styles.types}
                        />
                        <Text
                            text={String(article.views)}
                            className={styles.views}
                        />
                        <Icon Svg={EyeIcon} />
                    </HStack>

                    <Text text={article.title} className={styles.title} />
                </Card>
            </AppLink>
        );
    },
);
