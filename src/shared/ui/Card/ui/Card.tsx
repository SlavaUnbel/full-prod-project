import { FC, HTMLAttributes, ReactNode, memo } from 'react';

import { CardTheme } from '../lib/card';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card: FC<CardProps> = memo(
    ({
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    }: CardProps) => (
        <div
            className={classNames(styles.card, {
                mods: { [styles.max]: max },
                additional: [className, styles[theme]],
            })}
            {...otherProps}
        >
            {children}
        </div>
    ),
);
