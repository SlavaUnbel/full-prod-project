import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    fetchProfileData,
    profileActions,
    ProfileCard,
    profileErrorSelector,
    profileFormSelector,
    profileLoadingSelector,
    profileReadonlySelector,
    profileReducer,
} from 'entities/Profile';
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

import { ProfilePageHeader } from './ProfilePageHeader';

const ProfilePage: FC = () => {
    const dispatch = useAppDispatch();

    const data = useSelector(profileFormSelector);
    const error = useSelector(profileErrorSelector);
    const isLoading = useSelector(profileLoadingSelector);
    const readonly = useSelector(profileReadonlySelector);

    const handleChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const handleChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const handleChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value?.replace(/\D+/gm, '') || '') }));
    }, [dispatch]);

    const handleChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const handleChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const handleChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const handleChangeCurrency = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ currency: value as Currency }));
    }, [dispatch]);

    const handleChangeCountry = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ country: value as Country }));
    }, [dispatch]);

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

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    useDynamicModuleLoader({ reducers: { profile: profileReducer }, removeOnUnmount: true });

    return (
        <div className={classNames('')}>
            <ProfilePageHeader />

            <ProfileCard
                data={data}
                error={error}
                isLoading={isLoading}
                readonly={readonly}
                {...handlers}
            />
        </div>
    );
};

export default ProfilePage;
