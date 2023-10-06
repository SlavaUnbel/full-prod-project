import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { TextAlign } from '../lib/TextAlign';
import { TextTheme } from '../lib/TextTheme';
import styles from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign
}

const Text: FC<TextProps> = memo(({
    className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
}: TextProps) => (
    <div className={classNames(styles.text, {
        mods: {
            [styles[theme]]: true,
            [styles[align]]: true,
        },
        additional: [className],
    })}
    >
        { title && <p className={styles.title}>{title}</p> }
        { text && <p className={styles.text}>{text}</p> }
    </div>
));

export default Text;
