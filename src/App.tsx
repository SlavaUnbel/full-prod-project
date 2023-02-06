import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage/AboutPage.async';
import MainPage from './pages/MainPage/MainPage.async';

import useTheme from './theme/useTheme';
import classNames from './helpers/classNames/classNames';

import './styles/index.scss'

const App = () => {
    const { theme, toggleTheme } = useTheme();

    const bool = true;

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={ toggleTheme }>Сменить тему</button>

            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>

            <Suspense fallback={ <div>Loading...</div> }>
                <Routes>
                    <Route path='/' element={ <MainPage /> } />
                    <Route path='/about' element={ <AboutPage /> } />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App