import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';
import { Select } from 'shared/ui';
import { SelectOption } from 'shared/ui/Select';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: string;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const options: SelectOption[] = Object.values(Currency)
    .map((currency) => ({ value: currency, content: currency }));

export const CurrencySelect: FC<CurrencySelectProps> = memo(({
    className,
    value,
    readonly,
    onChange,
}: CurrencySelectProps) => {
    const { t } = useTranslation(Translations.PROFILE);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {
                mods: {},
                additional: [className],
            })}
            label={t('Your currency')}
            options={options}
            value={value}
            readonly={readonly}
            onChange={onChangeHandler}
        />
    );
});
