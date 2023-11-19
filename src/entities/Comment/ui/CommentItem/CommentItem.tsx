import { FC, memo } from 'react';

import { Comment } from '../../model/types/comment';

import { RoutePath } from '@/shared/const/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    AppLink, Avatar, HStack, Skeleton, Text, VStack,
} from '@/shared/ui';

import styles from './CommentItem.module.scss';

interface CommentItemProps {
    comment?: Comment;
    isLoading?: boolean;
    className?: string;
}

export const CommentItem: FC<CommentItemProps> = memo(({
    comment,
    isLoading,
    className,
}: CommentItemProps) => {
    if (!comment) {
        return null;
    }

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    <HStack className={styles.header}>
                        <Skeleton width={30} height={30} border="50%" className={styles.avatar} />

                        <Skeleton height={16} width={100} />
                    </HStack>

                    <Skeleton width="100%" height={50} />
                </>
            );
        }

        return (
            <>
                <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={styles.header}>
                    { comment.user.avatar
                && (
                    <Avatar
                        src={comment.user.avatar}
                        size={30}
                        className={styles.avatar}
                    />
                )}

                    <Text title={comment.user.username} />
                </AppLink>

                <Text text={comment.text} />
            </>
        );
    };

    return (
        <VStack className={classNames(styles.commentItem, { additional: [className] })}>
            {renderContent()}
        </VStack>
    );
});
