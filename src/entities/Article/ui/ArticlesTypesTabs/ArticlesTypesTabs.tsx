import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '../../model/consts/article';

import { Translations } from '@/shared/lib/translations/translations';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticlesTypesTabsProps {
    value: ArticleType;
    onChangeType: (value: ArticleType) => void;
}

export const ArticlesTypesTabs: FC<ArticlesTypesTabsProps> = memo(
    ({ value, onChangeType }: ArticlesTypesTabsProps) => {
        const { t } = useTranslation(Translations.ARTICLES);

        const typesTabs = useMemo<TabItem<ArticleType>[]>(
            () => [
                {
                    value: ArticleType.ALL,
                    content: t('All articles'),
                },
                {
                    value: ArticleType.IT,
                    content: t('IT'),
                },
                {
                    value: ArticleType.ECONOMICS,
                    content: t('Economics'),
                },
                {
                    value: ArticleType.SCIENCE,
                    content: t('Science'),
                },
            ],
            [t],
        );

        const handleTabClick = useCallback(
            (tab: TabItem<ArticleType>) => {
                onChangeType(tab.value);
            },
            [onChangeType],
        );

        return (
            <Tabs tabs={typesTabs} value={value} onTabClick={handleTabClick} />
        );
    },
);
