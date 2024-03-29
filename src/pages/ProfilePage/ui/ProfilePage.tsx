import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ProfilePageHeader } from './ProfilePageHeader';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import {
    profileActions,
    ProfileCard,
    profileErrorSelector,
    profileFormSelector,
    profileLoadingSelector,
    profileReadonlySelector,
    profileReducer,
    profileValidateErrorsSelector,
    ValidateProfileError,
    useGetProfileDataQuery,
} from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader';
import { Translations } from '@/shared/lib/translations/translations';
import { Text } from '@/shared/ui';
import { TextTheme } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

const ProfilePage: FC = () => {
    const { t } = useTranslation(Translations.PROFILE);

    const { id } = useParams<{ id: string }>();

    useGetProfileDataQuery(
        { profileId: id },
        { skip: !id, refetchOnMountOrArgChange: true },
    );

    const dispatch = useAppDispatch();

    const data = useSelector(profileFormSelector);
    const error = useSelector(profileErrorSelector);
    const isLoading = useSelector(profileLoadingSelector);
    const readonly = useSelector(profileReadonlySelector);
    const validateErrors = useSelector(profileValidateErrorsSelector);

    const validateErrorsTranslations = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Firstname and lastname are required',
        ),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.NO_DATA]: t('No data is provided'),
        [ValidateProfileError.SERVER_ERROR]: t(
            'An error has occured on profile update',
        ),
    };

    const handleChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstname: value || '' }));
        },
        [dispatch],
    );

    const handleChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const handleChangeAge = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({
                    age: Number(value?.replace(/\D+/gm, '') || ''),
                }),
            );
        },
        [dispatch],
    );

    const handleChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const handleChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const handleChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    const handleChangeCurrency = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({ currency: value as Currency }),
            );
        },
        [dispatch],
    );

    const handleChangeCountry = useCallback(
        (value?: string) => {
            dispatch(
                profileActions.updateProfile({ country: value as Country }),
            );
        },
        [dispatch],
    );

    const handlers = {
        onChangeFirstname: handleChangeFirstname,
        onChangeLastname: handleChangeLastname,
        onChangeAge: handleChangeAge,
        onChangeCity: handleChangeCity,
        onChangeUsername: handleChangeUsername,
        onChangeAvatar: handleChangeAvatar,
        onChangeCurrency: handleChangeCurrency,
        onChangeCountry: handleChangeCountry,
    };

    useDynamicModuleLoader({ reducers: { profile: profileReducer } });

    return (
        <Page className={classNames('')} dataTestId="profile-page">
            <ProfilePageHeader />

            {validateErrors?.length &&
                validateErrors.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={validateErrorsTranslations[error]}
                    />
                ))}

            <ProfileCard
                data={data}
                error={error}
                isLoading={isLoading}
                readonly={readonly}
                {...handlers}
            />
        </Page>
    );
};

export default ProfilePage;
