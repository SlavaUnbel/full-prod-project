import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, VStack } from '@/shared/ui';

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

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    { [1, 2, 3].map((mockComment) => (
                        <CommentItem
                            key={mockComment}
                            comment={{} as Comment}
                            isLoading
                            className={styles.comment}
                        />
                    )) }
                </>
            );
        }

        if (comments?.length) {
            return comments?.map((comment) => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    isLoading={isLoading}
                    className={styles.comment}
                />
            ));
        }

        return <Text text={t('There are no comments')} />;
    };

    return (
        <VStack
            className={classNames(styles.commentList, { additional: [className] })}
        >
            {renderContent()}
        </VStack>
    );
});
