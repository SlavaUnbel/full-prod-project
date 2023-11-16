import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Translations } from 'shared/lib/translations/translations';
import {
    Avatar, HStack, Icon, Skeleton, Text, VStack,
} from 'shared/ui';
import { TextAlign, TextSize } from 'shared/ui/Text';

import {
    articleDetailsDataSelector,
    articleDetailsErrorSelector,
    articleDetailsLoadingSelector,
} from '../../model/selectors/articleDetailsSelector';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({
    id,
    className,
}: ArticleDetailsProps) => {
    const { t } = useTranslation(Translations.ARTICLES);

    const dispatch = useAppDispatch();

    const isLoading = useSelector(articleDetailsLoadingSelector);
    const error = useSelector(articleDetailsErrorSelector);
    const article = useSelector(articleDetailsDataSelector);

    useDynamicModuleLoader({
        reducers: { articleDetails: articleDetailsReducer },
    });

    let articleContent;

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={styles.block}
                    block={block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    className={styles.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={styles.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    switch (true) {
    case isLoading:
        articleContent = (
            <VStack max>
                <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
            </VStack>
        );
        break;
    case Boolean(error):
        articleContent = (
            <Text
                align={TextAlign.CENTER}
                title={t('An error has occured on article loading')}
            />
        );
        break;
    default:
        articleContent = (
            <>
                <HStack justify="center" max>
                    <Avatar size={200} src={article?.img} className={styles.avatar} />
                </HStack>

                <Text
                    className={styles.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />

                <HStack>
                    <Icon Svg={EyeIcon} className={styles.icon} />
                    <Text text={String(article?.views)} />
                </HStack>

                <HStack>
                    <Icon Svg={CalendarIcon} className={styles.icon} />
                    <Text text={article?.createdAt} />
                </HStack>

                {article?.blocks.map(renderBlock)}
            </>
        );
        break;
    }

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    }, [id]);

    return (
        <VStack
            gap="gap-m"
            max
            className={classNames(styles.articleDetails, {
                mods: {},
                additional: [className],
            })}
        >
            { articleContent }
        </VStack>
    );
});
