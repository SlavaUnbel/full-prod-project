import { FC, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AppRouter } from './providers/router';

import { userActions, userInitedSelector } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import useTheme from '@/shared/lib/hooks/useTheme';
import { HStack } from '@/shared/ui';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

const App: FC = () => {
    const dispatch = useAppDispatch();

    const inited = useSelector(userInitedSelector);

    const { theme } = useTheme();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', { additional: [theme] })}>
            <Suspense fallback="">
                <Navbar />

                <HStack>
                    <Sidebar />

                    {inited && <AppRouter />}
                </HStack>
            </Suspense>
        </div>
    );
};

export default App;
