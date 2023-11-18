import { NotificationsList } from 'entities/Notification';
import {
    FC, memo, useCallback, useState,
} from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationsIcon from 'shared/assets/icons/notifications.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    Button, Drawer, Icon, Popover,
} from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';

import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo(({
    className,
}: NotificationButtonProps) => {
    const [isOpenDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = useCallback(() => {
        setOpenDrawer(true);
    }, []);

    const handleCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    const trigger = (
        <Button onClick={handleOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationsIcon} inverted />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames('', { additional: [className] })}
                    direction="bottom left"
                    // TODO: включить если понадобится чтобы уведомления получались независимо от открытия поповера
                    // unmount={false}
                    trigger={trigger}
                >
                    <NotificationsList className={styles.notifications} />
                </Popover>
            </BrowserView>

            <MobileView>
                {trigger}
                <Drawer isOpen={isOpenDrawer} onClose={handleCloseDrawer}>
                    <NotificationsList />
                </Drawer>
            </MobileView>
        </>
    );
});
