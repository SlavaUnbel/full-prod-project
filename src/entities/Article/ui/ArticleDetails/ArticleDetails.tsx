import {
    ArticleBlock,
    ArticleBlockType,
    ArticleCodeBlockComponent,
    ArticleImageBlockComponent,
    ArticleTextBlockComponent,
    articleDetailsDataSelector,
    articleDetailsErrorSelector,
    articleDetailsLoadingSelector,
    articleDetailsReducer,
    fetchArticleById,
} from 'entities/Article';
import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { Translations } from 'shared/lib/translations/translations';
import {
    Avatar, Icon, Skeleton, Text,
} from 'shared/ui';
import { TextAlign, TextSize } from 'shared/ui/Text';

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
        reducers: {
            articleDetails: articleDetailsReducer,
        },
        removeOnUnmount: true,
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
            <div>
                <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
                <Skeleton className={styles.title} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
                <Skeleton className={styles.skeleton} width="100%" height={200} />
            </div>
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
                <div className={styles.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={styles.avatar} />
                </div>

                <Text
                    className={styles.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />

                <div className={styles.articleInfo}>
                    <Icon Svg={EyeIcon} className={styles.icon} />
                    <Text text={String(article?.views)} />
                </div>

                <div className={styles.articleInfo}>
                    <Icon Svg={CalendarIcon} className={styles.icon} />
                    <Text text={article?.createdAt} />
                </div>

                {article?.blocks.map(renderBlock)}
            </>
        );
        break;
    }

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [id, dispatch]);

    return (
        <div className={classNames(styles.articleDetails, {
            mods: {},
            additional: [className],
        })}
        >
            { articleContent }
        </div>
    );
});
