import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonTheme } from '../lib/ButtonTheme';
import { ButtonSize } from '../lib/ButtonSize';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    primary?: boolean;
    backgroundColor?: string;
    square?: boolean;
    theme?: ButtonTheme;
    size?: ButtonSize;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [styles[theme]]: true,
        [styles.square]: square,
        [styles[size]]: true,
        [styles.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(styles.button, {
                mods,
                additional: [className, styles[theme]],
            })}
            disabled={disabled}
            {...otherProps}
        >
            { children }
        </button>
    );
};

export default Button;
