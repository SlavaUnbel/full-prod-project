import {
    DetailedHTMLProps, FC, HTMLAttributes, ReactNode,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FLexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = 'gap-3xs' | 'gap-2xs' | 'gap-xs' | 'gap-s' | 'gap-m' | 'gap-l' | 'gap-xl' | 'gap-2xl' | 'gap-3xl' | 'gap-4xl';
export type FlexWrap = 'nowrap' | 'wrap';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FLexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    wrap?: FlexWrap;
    max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignClasses: Record<FLexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    'gap-3xs': styles['gap-3xs'],
    'gap-2xs': styles['gap-2xs'],
    'gap-xs': styles['gap-xs'],
    'gap-s': styles['gap-s'],
    'gap-m': styles['gap-m'],
    'gap-l': styles['gap-l'],
    'gap-xl': styles['gap-xl'],
    'gap-2xl': styles['gap-2xl'],
    'gap-3xl': styles['gap-3xl'],
    'gap-4xl': styles['gap-4xl'],
};

const wrapClasses: Record<FlexWrap, string> = {
    nowrap: styles.nowrap,
    wrap: styles.wrap,
};

export const Flex: FC<FlexProps> = ({
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    wrap = 'nowrap',
    max,
}: FlexProps) => {
    const mods: Mods = {
        [styles.max]: max,
    };

    const additional = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        wrapClasses[wrap],
    ];

    return (
        <div className={classNames(styles.flex, { mods, additional })}>
            {children}
        </div>
    );
};
