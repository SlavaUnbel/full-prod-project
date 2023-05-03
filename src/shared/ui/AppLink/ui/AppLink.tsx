import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';
import { AppLinkTheme } from '../lib/AppLinkTheme';

import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
    className?: string;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        theme = AppLinkTheme.PRIMARY,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.appLink, {
                mods: {},
                additional: [className, styles[theme]],
            })}
            {...otherProps}
        >
            { children }
        </Link>
    );
};

export default AppLink;
