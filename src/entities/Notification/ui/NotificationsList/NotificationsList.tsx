import { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { useGetNotificationsDataQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import { userAuthDataSelector } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton, VStack } from '@/shared/ui';

import styles from './NotificationsList.module.scss';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsList: FC<NotificationsListProps> = memo(({
    className,
}: NotificationsListProps) => {
    const authData = useSelector(userAuthDataSelector);
    const { data: notifications = [], isFetching } = useGetNotificationsDataQuery(null, {
        pollingInterval: 5000,
        selectFromResult: ({ data, ...otherProps }) => ({
            data: data?.filter((notification) => notification.userId === authData?.id),
            ...otherProps,
        }),
    });

    const renderContent = (): JSX.Element => {
        if (isFetching) {
            return (
                <>
                    {[1, 2, 3].map((_, key) => <Skeleton key={key} width="100%" border="8px" height="80px" />)}
                </>
            );
        }

        return (
            <>
                { notifications.map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                )) }
            </>
        );
    };

    return (
        <VStack
            gap="gap-m"
            max
            className={classNames(styles.notificationsList, { additional: [className] })}
        >
            { renderContent() }
        </VStack>
    );
});
