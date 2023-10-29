import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui';

import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import styles from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo(({
    className,
    comments,
    isLoading,
}: CommentListProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.commentList, {
            mods: {},
            additional: [className],
        })}
        >
            { comments?.length ? (
                comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                        className={styles.comment}
                    />
                ))
            ) : (
                <Text text={t('There are no comments')} />
            ) }
        </div>
    );
});
