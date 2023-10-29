import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink, Avatar, Skeleton, Text,
} from 'shared/ui';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
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
    if (isLoading) {
        return (
            <div className={classNames(styles.loadingItem, {
                mods: {},
                additional: [className],
            })}
            >
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border="50%" className={styles.avatar} />

                    <Skeleton height={16} width={100} />
                </div>

                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(styles.commentItem, {
            mods: {},
            additional: [className],
        })}
        >
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
        </div>
    );
});
