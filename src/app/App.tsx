import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Counter } from 'entities/Counter';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { mods: {}, additional: [theme] })}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                    <Counter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
