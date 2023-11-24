import React, { FC } from 'react';

import useTheme from '../../../lib/hooks/useTheme';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import { HStack } from '../../Stack';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';

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
    const { isClosing, isMounted, handleClose, handleContentClick } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.closing]: isClosing,
    };

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
