import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage/AboutPage.async';
import MainPage from './pages/MainPage/MainPage.async';

import './index.scss';

const App = () => {
    return (
        <div className='app'>
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