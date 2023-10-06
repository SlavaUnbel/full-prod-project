import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';
import { Select } from 'shared/ui';
import { SelectOption } from 'shared/ui/Select';

import { Country } from 'entities/Country';

interface CountrySelectProps {
    className?: string;
    value?: string;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const options: SelectOption[] = Object.values(Country)
    .map((currency) => ({ value: currency, content: currency }));

export const CountrySelect: FC<CountrySelectProps> = memo(({
    className,
    value,
    readonly,
    onChange,
}: CountrySelectProps) => {
    const { t } = useTranslation(Translations.PROFILE);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

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
            onChange={onChangeHandler}
        />
    );
});
