import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Translations } from 'shared/lib/translations/translations';
import { HStack, Select } from 'shared/ui';
import { SelectOption } from 'shared/ui/Select';

import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/types/article';

interface ArticleSortSelectorProps {
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(({
    sort,
    order,
    onChangeSort,
    onChangeOrder,
}: ArticleSortSelectorProps) => {
    const { t } = useTranslation(Translations.ARTICLES);

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Ascending'),
        },
        {
            value: 'desc',
            content: t('Descending'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('Creation date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('Title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('Views'),
        },
    ], [t]);

    return (
        <HStack gap="gap-xs">
            <Select options={sortFieldOptions} value={sort} onChange={onChangeSort} label={t('Sort field')} />
            <Select options={orderOptions} value={order} onChange={onChangeOrder} label={t('Sort order')} />
        </HStack>
    );
});
