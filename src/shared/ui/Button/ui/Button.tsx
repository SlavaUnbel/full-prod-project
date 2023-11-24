import { ButtonHTMLAttributes, FC, memo } from 'react';

import { ButtonSize } from '../lib/ButtonSize';
import { ButtonTheme } from '../lib/ButtonTheme';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

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

const Button: FC<ButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
}) => {
    const mods: Mods = {
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
            {children}
        </button>
    );
};

export default memo(Button);
