import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();

    useDynamicModuleLoader({ reducers: { profile: profileReducer }, removeOnUnmount: true });

    return (
        <div className={classNames(styles.profilePage, {
            mods: {},
            additional: [className],
        })}
        >
            ProfilePage
        </div>
    );
};

export default ProfilePage;
