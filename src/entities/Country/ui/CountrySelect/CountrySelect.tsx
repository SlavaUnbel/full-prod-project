import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';
import { Select } from 'shared/ui';
import { SelectOption } from 'shared/ui/Select';

import { Country } from 'entities/Country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const options: SelectOption<Country>[] = Object.values(Country)
    .map((currency) => ({ value: currency, content: currency }));

export const CountrySelect: FC<CountrySelectProps> = memo(({
    className,
    value,
    readonly,
    onChange,
}: CountrySelectProps) => {
    const { t } = useTranslation(Translations.PROFILE);

    return (
        <Select
            className={classNames('', {
                mods: {},
                additional: [className],
            })}
            label={t('Your country')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={onChange}
        />
    );
});
