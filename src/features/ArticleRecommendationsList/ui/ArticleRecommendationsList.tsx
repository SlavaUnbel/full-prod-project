import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetArticleRecommendstionsListQuery } from '../api/articleRecommendationsApi';

import { ArticlesList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Translations } from '@/shared/lib/translations/translations';
import { Text, VStack } from '@/shared/ui';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> =
    memo(({ className }: ArticleRecommendationsListProps) => {
        const { t } = useTranslation(Translations.ARTICLES);

        const {
            data: articles = [],
            isLoading,
            error,
        } = useGetArticleRecommendstionsListQuery({ limit: 4 });

        if (error) {
            return null;
        }

        return (
            <VStack
                gap="gap-xs"
                className={classNames('', { additional: [className] })}
            >
                <Text title={t('Recommenddations')} />

                <ArticlesList
                    articles={articles}
                    isLoading={isLoading}
                    target="_blank"
                />
            </VStack>
        );
    });
