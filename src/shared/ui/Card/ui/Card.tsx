import {
    FC, HTMLAttributes, ReactNode, memo,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Card.module.scss';
import { CardTheme } from '../lib/card';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
}

export const Card: FC<CardProps> = memo(({
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
}: CardProps) => (
    <div
        className={classNames(styles.card, {
            additional: [className, styles[theme]],
        })}
        {...otherProps}
    >
        {children}
    </div>
));
