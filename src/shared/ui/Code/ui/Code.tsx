import {
    FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from '../../../assets/icons/copy.svg';

import { Button, ButtonTheme } from '../../Button';
import styles from './Code.module.scss';

interface CodeProps {
    text: string;
    className?: string;
}

export const Code: FC<CodeProps> = memo(({
    text,
    className,
}: CodeProps) => {
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(styles.code, {
            mods: {},
            additional: [className],
        })}
        >
            <Button className={styles.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={styles.copyIcon} />
            </Button>

            <code>
                {text}
            </code>
        </pre>
    );
});
