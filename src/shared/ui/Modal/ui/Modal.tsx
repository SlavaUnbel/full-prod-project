import { useTheme } from 'app/providers/ThemeProvider';
import React, {
    FC, MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import { HStack } from '../../Stack';
import styles from './Modal.module.scss';

interface ModalProps {
    children: React.ReactNode;
    className?: string;
    isOpen?: boolean;
    lazy?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpen,
    lazy,
    onClose,
}) => {
    const { theme } = useTheme();

    const [isClosing, setClosing] = useState(false);
    const [isMounted, setMounted] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.closing]: isClosing,
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

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
        }
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <HStack
                justify="center"
                className={classNames(styles.modal, {
                    mods,
                    additional: [className, theme, 'app_modal'],
                })}
            >
                <Overlay onClick={handleClose} />

                <div className={styles.content} onClick={handleContentClick}>
                    {children}
                </div>
            </HStack>
        </Portal>
    );
};

export default Modal;
