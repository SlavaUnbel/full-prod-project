import {
    articleDetailsDataSelector,
    articleDetailsErrorSelector,
    articleDetailsLoadingSelector,
    articleDetailsReducer,
    fetchArticleById,
} from 'entities/Article';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { Translations } from 'shared/lib/translations/translations';
import { Text } from 'shared/ui';
import { TextAlign } from 'shared/ui/Text';

import Skeleton from 'shared/ui/Skeleton/ui/Skeleton';
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

    let articleContent;

    useDynamicModuleLoader({
        reducers: {
            articleDetails: articleDetailsReducer,
        },
        removeOnUnmount: true,
    });

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
            <div>
                {article?.blocks.map((block) => <div key={block.id}>{block.type}</div>)}
            </div>
        );
        break;
    }

    useEffect(() => {
        dispatch(fetchArticleById(id));
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
