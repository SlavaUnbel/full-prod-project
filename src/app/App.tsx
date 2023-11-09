import { userActions, userInitedSelector } from 'entities/User';
import { FC, Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

const App: FC = () => {
    const dispatch = useAppDispatch();

    const inited = useSelector(userInitedSelector);

    const { theme } = useTheme();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {
            mods: {},
            additional: [theme],
        })}
        >
            <Suspense fallback="">
                <Navbar />

                <HStack>
                    <Sidebar />
                    {inited && <AppRouter /> }
                </HStack>
            </Suspense>
        </div>
    );
};

export default App;
