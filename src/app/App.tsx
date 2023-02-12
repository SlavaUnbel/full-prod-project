import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import classNames from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss'

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={ toggleTheme }>Сменить тему</button>

            <Navbar />

            <AppRouter />
        </div>
    )
}

export default App