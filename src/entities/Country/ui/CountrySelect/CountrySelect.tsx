import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Translations } from 'shared/lib/translations/translations';
import { ListBox } from 'shared/ui';
import { ListBoxProps } from 'shared/ui/ListBox';
import { SelectOption } from 'shared/ui/Select';

import { Country } from '../../model/types/country';

export const CountrySelect = ({
    className,
    value,
    readonly,
    onChange,
}: ListBoxProps<Country>) => {
    const { t } = useTranslation(Translations.PROFILE);

    const countryOptions: SelectOption<Country>[] = useMemo(() => Object.values(Country)
        .map((country) => ({ value: t(country), content: t(country) })), [t]);

    return (
        <ListBox
            className={className}
            value={value}
            label={t('Your country')}
            items={countryOptions}
            onChange={onChange}
            readonly={readonly}
            direction="top right"
        />
    );
};
