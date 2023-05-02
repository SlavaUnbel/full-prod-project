import classNames from 'shared/lib/classNames'
import { AppLink, ThemeSwitcher } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import style from './Navbar.module.scss'
import { FC } from 'react';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={ classNames(style.navbar, {}, [className]) }>
            <ThemeSwitcher />
            <div className={ style.links }>
                <AppLink to={ RoutePath.main } theme={ AppLinkTheme.SECONDARY }>
                    Главная
                </AppLink>
                <AppLink to={ RoutePath.about } theme={ AppLinkTheme.SECONDARY }>
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}

export default Navbar