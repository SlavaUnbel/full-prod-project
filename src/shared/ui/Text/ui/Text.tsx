import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { TextTheme } from '../lib/TextTheme';
import styles from './Text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

const Text: FC<TextProps> = memo(({
    className, title, text, theme = TextTheme.PRIMARY,
}: TextProps) => (
    <div className={classNames(styles.text, {
        mods: { [styles[theme]]: true },
        additional: [className],
    })}
    >
        { title && <p className={styles.title}>{title}</p> }
        { text && <p className={styles.text}>{text}</p> }
    </div>
));

export default Text;
