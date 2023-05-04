import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeButton } from '../lib/ThemeButton';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(styles.button, {
                mods: {},
                additional: [className, styles[theme]],
            })}
            {...otherProps}
        >
            { children }
        </button>
    );
};

export default Button;
