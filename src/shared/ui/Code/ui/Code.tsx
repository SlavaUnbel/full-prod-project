import { FC, memo, useCallback } from 'react';
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
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(styles.code, { additional: [className] })}>
            <Button className={styles.copyBtn} theme={ButtonTheme.CLEAR} onClick={handleCopy}>
                <CopyIcon className={styles.copyIcon} />
            </Button>

            <code>
                {text}
            </code>
        </pre>
    );
});
