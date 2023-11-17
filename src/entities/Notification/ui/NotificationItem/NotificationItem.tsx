import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, Card, Text } from 'shared/ui';

import { CardTheme } from 'shared/ui/Card';
import { Notification } from '../../model/types/notification';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
    notification: Notification;
    className?: string;
}

export const NotificationItem: FC<NotificationItemProps> = memo(({
    notification,
    className,
}: NotificationItemProps) => {
    const notificationContent = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(styles.notificationItem, {
                additional: [className],
            })}
        >
            <Text title={notification.title} text={notification.description} />
        </Card>
    );

    if (notification.href) {
        return (
            <AppLink
                to={notification.href}
                target="_blank"
                className={styles.link}
            >
                {notificationContent}
            </AppLink>
        );
    }

    return notificationContent;
});
