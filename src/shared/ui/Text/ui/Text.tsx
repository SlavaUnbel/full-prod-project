import { FC, memo } from 'react';

import { TextAlign } from '../lib/TextAlign';
import { TextSize } from '../lib/TextSize';
import { TextTheme } from '../lib/TextTheme';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

type HeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

const Text: FC<TextProps> = ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
}) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(styles.text, {
            mods: {
                [styles[theme]]: true,
                [styles[align]]: true,
                [styles[size]]: true,
            },
            additional: [className],
        })}
        >
            { title && <HeaderTag className={styles.title}>{title}</HeaderTag> }
            { text && <p className={styles.text}>{text}</p> }
        </div>
    );
};

export default memo(Text);
