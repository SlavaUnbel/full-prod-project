import { useTheme } from 'app/providers/ThemeProvider';
import { FC, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useModal } from 'shared/lib/hooks/useModal';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import { HStack } from '../../Stack';
import styles from './Drawer.module.scss';

interface DrawerProps {
    children: ReactNode;
    isOpen?: boolean;
    className?: string;
    lazy?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Drawer: FC<DrawerProps> = memo(({
    children,
    isOpen,
    className,
    lazy,
    onClose,
}: DrawerProps) => {
    const { theme } = useTheme();
    const {
        isClosing,
        isMounted,
        handleClose,
    } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <HStack
                align="end"
                className={classNames(styles.drawer, { mods, additional: [className, theme, 'app_drawer'] })}
            >
                <Overlay onClick={handleClose} />

                <div className={styles.content}>
                    {children}
                </div>
            </HStack>
        </Portal>
    );
});
