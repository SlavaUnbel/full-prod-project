import { useTranslation } from 'react-i18next';
import { Translations } from '@/shared/lib/translations/translations';
import { ListBox, ListBoxProps } from '@/shared/ui/Popups/ListBox';
import { SelectOption } from '@/shared/ui/Select';

import { Currency } from '../../model/types/currency';

const options: SelectOption<Currency>[] = Object.values(Currency)
    .map((currency) => ({ value: currency, content: currency }));

export const CurrencySelect = ({
    className,
    value,
    readonly,
    onChange,
}: ListBoxProps<Currency>) => {
    const { t } = useTranslation(Translations.PROFILE);

    return (
        <ListBox
            className={className}
            value={value}
            label={t('Your currency')}
            items={options}
            onChange={onChange}
            readonly={readonly}
            direction="top right"
        />
    );
};
