import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui';
import { useTheme } from 'app/providers/ThemeProvider';

import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpen,
    onClose,
}) => {
    const [isClosing, setClosing] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.closing]: isClosing,
        [styles[theme]]: true,
    };

    const handleClose = useCallback(() => {
        if (onClose) {
            setClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);

            clearTimeout(timerRef.current);
        };
    }, [isOpen, handleKeyDown]);

    return (
        <Portal>
            <div className={classNames(styles.modal, {
                mods,
                additional: [className],
            })}
            >
                <div className={styles.overlay} onClick={handleClose}>
                    <div className={styles.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
