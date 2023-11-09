import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';
import {
    Avatar, HStack, Loader, VStack,
} from 'shared/ui';
import { Input } from 'shared/ui/Input';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text';

import { Profile } from '../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCountry?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeCurrency?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
}

const inputsData = (
    data?: Profile,
    handlers?: Pick<ProfileCardProps,
        'onChangeFirstname' |
        'onChangeLastname' |
        'onChangeAge' |
        'onChangeCountry' |
        'onChangeCity' |
        'onChangeCurrency' |
        'onChangeUsername' |
        'onChangeAvatar'>,
) => [
    {
        value: data?.firstname,
        placeholder: 'Your firstname',
        onChange: handlers?.onChangeFirstname,
    },
    {
        value: data?.lastname,
        placeholder: 'Your lastname',
        onChange: handlers?.onChangeLastname,
    },
    {
        value: data?.age?.toString(),
        placeholder: 'Your age',
        onChange: handlers?.onChangeAge,
    },
    {
        value: data?.country,
        label: 'Your country',
        isSelect: true,
        SelectComponent: CountrySelect,
        onChange: handlers?.onChangeCountry,
    },
    {
        value: data?.city,
        placeholder: 'Your city',
        onChange: handlers?.onChangeCity,
    },
    {
        value: data?.currency,
        label: 'Your currency',
        isSelect: true,
        SelectComponent: CurrencySelect,
        onChange: handlers?.onChangeCurrency,
    },
    {
        value: data?.username,
        placeholder: 'Your username',
        onChange: handlers?.onChangeUsername,
    },
    {
        value: data?.avatar,
        placeholder: 'Link to avatar',
        onChange: handlers?.onChangeAvatar,
    },
];

export const ProfileCard: FC<ProfileCardProps> = memo(({
    data,
    className,
    error,
    isLoading,
    readonly,
    ...handlers
}: ProfileCardProps) => {
    const { t } = useTranslation(Translations.PROFILE);

    const inputs = inputsData(data, handlers);

    const mods: Mods = {
        [styles.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <HStack
                justify="center"
                className={classNames(styles.profileCard, {
                    mods,
                    additional: [className, styles.loading],
                })}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                className={classNames(styles.profileCard, {
                    mods,
                    additional: [className, styles.error],
                })}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error has occured on profile loading')}
                    text={t('Try to reload the page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    return (
        <VStack className={classNames(styles.profileCard, { mods, additional: [className] })}>
            { data?.avatar && (
                <HStack className={styles.avatarWrapper}>
                    <Avatar src={data?.avatar} size={150} />
                </HStack>
            ) }

            { inputs.map(({
                label, value, onChange, placeholder, SelectComponent, isSelect,
            }) => (
                isSelect && SelectComponent
                    ? (
                        <SelectComponent
                            key={label}
                            value={value as any}
                            onChange={onChange as any}
                            readonly={readonly}
                            className={styles.select}
                        />
                    ) : (
                        <Input
                            key={placeholder}
                            value={value}
                            placeholder={t(placeholder || '')}
                            onChange={onChange}
                            readonly={readonly}
                            className={styles.input}
                        />
                    )
            )) }
        </VStack>
    );
});
