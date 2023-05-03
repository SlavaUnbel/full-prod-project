import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'shared/lib/classNames';

import styles from './Button.module.scss';
import { ThemeButton } from '../lib/ThemeButton';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            { children }
        </button>
    );
};

export default Button;
