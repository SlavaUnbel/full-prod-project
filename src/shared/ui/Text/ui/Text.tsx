import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { TextAlign } from '../lib/TextAlign';
import { TextSize } from '../lib/TextSize';
import { TextTheme } from '../lib/TextTheme';
import styles from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

const Text: FC<TextProps> = ({
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
}) => (
    <div className={classNames(styles.text, {
        mods: {
            [styles[theme]]: true,
            [styles[align]]: true,
            [styles[size]]: true,
        },
        additional: [className],
    })}
    >
        { title && <p className={styles.title}>{title}</p> }
        { text && <p className={styles.text}>{text}</p> }
    </div>
);

export default memo(Text);
