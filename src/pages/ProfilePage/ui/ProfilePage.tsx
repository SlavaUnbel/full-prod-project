import { fetchProfileData, profileReducer } from 'entities/Profile';
import ProfileCard from 'entities/Profile/ui/ProfileCard';
import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';

const ProfilePage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    useDynamicModuleLoader({ reducers: { profile: profileReducer }, removeOnUnmount: true });

    return (
        <div className={classNames('')}>
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;
