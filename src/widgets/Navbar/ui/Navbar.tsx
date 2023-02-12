import { Link } from 'react-router-dom'

import classNames from 'shared/lib/classNames'
import { AppLink } from 'shared/ui';

import style from './Navbar.module.scss'

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={ classNames(style.navbar, {}, [className]) }>
            <div className={ style.links }>
                <AppLink to='/'>Главная</AppLink>
                <AppLink to='/about'>О сайте</AppLink>
            </div>
        </div>
    )
}

export default Navbar