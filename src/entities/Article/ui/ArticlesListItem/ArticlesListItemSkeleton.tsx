import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    Card, HStack, Skeleton, VStack,
} from 'shared/ui';

import { ArticleView } from '../../model/consts/article';
import styles from './ArticlesListItem.module.scss';

interface ArticlesListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticlesListItemSkeleton = memo((props: ArticlesListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
        return (
            <VStack
                max
                className={classNames(styles.ArticleListItem, {
                    additional: [className, styles[view]],
                })}
            >
                <Card className={styles.card}>
                    <HStack className={styles.header}>
                        <Skeleton border="50%" height={30} width={30} />
                        <Skeleton width={150} height={16} className={styles.username} />
                        <Skeleton width={150} height={16} className={styles.date} />
                    </HStack>
                    <Skeleton width={250} height={24} className={styles.title} />
                    <Skeleton height={200} className={styles.img} />
                    <HStack className={styles.footer}>
                        <Skeleton height={36} width={200} />
                    </HStack>
                </Card>
            </VStack>
        );
    }

    return (
        <VStack
            max
            className={classNames(styles.ArticleListItem, {
                additional: [className, styles[view]],
            })}
        >
            <Card className={styles.card}>
                <HStack className={styles.imageWrapper}>
                    <Skeleton width={200} height={200} className={styles.img} />
                </HStack>
                <HStack className={styles.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </HStack>
                <Skeleton width={150} height={16} className={styles.title} />
            </Card>
        </VStack>
    );
});
