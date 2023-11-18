import {
    FC, memo, ReactNode, useCallback, useEffect,
} from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import { useModal } from '@/shared/lib/hooks/useModal';
import { AnimationProvider, useAnimationModules } from '@/shared/lib/components';
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

const HEIGHT = window.innerHeight - 100;
const ANIMATION_DELAY = 300;

const DrawerContent: FC<DrawerProps> = memo(({
    children,
    isOpen,
    className,
    lazy,
    onClose,
}: DrawerProps) => {
    const { Gesture, Spring } = useAnimationModules();
    const { theme } = useTheme();
    const {
        isClosing,
        isMounted,
    } = useModal({ animationDelay: ANIMATION_DELAY, onClose, isOpen });

    const mods: Mods = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    const [{ y }, api] = Spring.useSpring(() => ({ y: HEIGHT }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: HEIGHT,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > HEIGHT * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    if (!isOpen || (lazy && !isMounted)) {
        return null;
    }

    const display = y.to((py) => (py < HEIGHT ? 'block' : 'none'));

    return (
        <Portal>
            <HStack
                align="end"
                className={classNames(styles.drawer, { mods, additional: [className, theme, 'app_drawer'] })}
            >
                <Overlay onClick={close} />

                <Spring.a.div
                    className={styles.sheet}
                    style={{ display, bottom: `calc(-100vh + ${HEIGHT - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </HStack>
        </Portal>
    );
});

const DrawerAsync: FC<DrawerProps> = (props) => {
    const { isLoaded } = useAnimationModules();

    if (!isLoaded) {
        return null;
    }

    return (
        <DrawerContent {...props} />
    );
};

export const Drawer: FC<DrawerProps> = (props) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
);
