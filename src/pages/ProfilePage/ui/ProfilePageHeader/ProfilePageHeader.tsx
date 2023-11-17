import {
    profileActions, profileDataSelector, profileReadonlySelector, updateProfileData,
} from 'entities/Profile';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Translations } from 'shared/lib/translations/translations';
import { Button, HStack, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';

import { userAuthDataSelector } from 'entities/User';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = ({ className }) => {
    const { t } = useTranslation(Translations.PROFILE);

    const dispatch = useAppDispatch();

    const readonly = useSelector(profileReadonlySelector);
    const authData = useSelector(userAuthDataSelector);
    const profileData = useSelector(profileDataSelector);
    const canEditProfile = authData?.id === profileData?.id;

    const toggleEditProfile = useCallback(() => {
        dispatch(readonly
            ? profileActions.setReadonly(false)
            : profileActions.cancelEditProfile());
    }, [dispatch, readonly]);

    const handleSaveProfile = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack className={classNames(styles.profilePageHeader, { additional: [className] })}>
            <Text title={t('Profile')} />
            { canEditProfile && (
                <HStack className={styles.btnWrapper}>
                    <Button
                        className={styles.editBtn}
                        theme={readonly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_RED}
                        onClick={toggleEditProfile}
                    >
                        {readonly ? t('Edit') : t('Cancel')}
                    </Button>

                    { !readonly && (
                        <Button
                            className={styles.saveBtn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={handleSaveProfile}
                        >
                            {t('Save')}
                        </Button>
                    ) }
                </HStack>
            ) }
        </HStack>
    );
};

export default memo(ProfilePageHeader);
