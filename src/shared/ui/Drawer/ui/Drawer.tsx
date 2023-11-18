import { useTheme } from 'app/providers/ThemeProvider';
import { FC, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import { HStack } from '../../Stack';
import styles from './Drawer.module.scss';

interface DrawerProps {
    children: ReactNode;
    isOpen?: boolean;
    className?: string;
    onClose?: () => void;
}

export const Drawer: FC<DrawerProps> = memo(({
    children,
    isOpen,
    className,
    onClose,
}: DrawerProps) => {
    const { theme } = useTheme();

    const mods: Mods = {
        [styles.opened]: isOpen,
    };

    return (
        <Portal>
            <HStack
                align="end"
                className={classNames(styles.drawer, { mods, additional: [className, theme, 'app_drawer'] })}
            >
                <Overlay onClick={onClose} />

                <div className={styles.content}>
                    {children}
                </div>
            </HStack>
        </Portal>
    );
});
