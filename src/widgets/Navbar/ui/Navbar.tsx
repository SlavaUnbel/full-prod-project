import classNames from 'shared/lib/classNames'
import { AppLink } from 'shared/ui';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import style from './Navbar.module.scss'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={ classNames(style.navbar, {}, [className]) }>
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