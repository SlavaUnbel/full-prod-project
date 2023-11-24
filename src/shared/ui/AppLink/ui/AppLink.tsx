import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { AppLinkTheme } from '../lib/AppLinkTheme';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
    className?: string;
}

const AppLink: FC<AppLinkProps> = ({
    to,
    theme = AppLinkTheme.PRIMARY,
    className,
    children,
    ...otherProps
}) => (
    <Link
        to={to}
        className={classNames(styles.appLink, {
            additional: [className, styles[theme]],
        })}
        {...otherProps}
    >
        {children}
    </Link>
);

export default AppLink;
