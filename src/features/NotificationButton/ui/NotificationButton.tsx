import { NotificationsList } from 'entities/Notification';
import { FC, memo } from 'react';
import NotificationsIcon from 'shared/assets/icons/notifications.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, Icon, Popover } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';

import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = memo(({
    className,
}: NotificationButtonProps) => (
    <Popover
        className={classNames('', { additional: [className] })}
        direction="bottom left"
        // TODO: включить если понадобится чтобы уведомления получались независимо от открытия поповера
        // unmount={false}
        trigger={(
            <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationsIcon} inverted />
            </Button>
        )}
    >
        <NotificationsList className={styles.notifications} />
    </Popover>
));
