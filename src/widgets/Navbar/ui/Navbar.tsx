import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(style.navbar, {
                mods: {},
                additional: [className],
            })}
        >
            <div className={style.links}>
                <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
                    { t('Главная') }
                </AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
                    { t('О сайте') }
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
