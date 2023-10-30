import {
    FC, HTMLAttributes, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export const Card: FC<CardProps> = memo(({ className, children, ...otherProps }: CardProps) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(styles.card, {
                mods: {},
                additional: [className],
            })}
            {...otherProps}
        >
            {children}
        </div>
    );
});
