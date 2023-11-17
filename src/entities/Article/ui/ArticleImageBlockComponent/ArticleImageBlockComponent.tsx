import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, VStack } from 'shared/ui';
import { TextAlign } from 'shared/ui/Text';

import { ArticleImageBlock } from '../../model/types/article';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    block: ArticleImageBlock
    className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({
    block,
    className,
}: ArticleImageBlockComponentProps) => (
    <VStack
        max
        gap="gap-xs"
        align="center"
        className={classNames(styles.articleImageBlockComponent, { additional: [className] })}
    >
        <img src={block.src} className={styles.img} alt={block.title} />

        {block.title && (
            <Text text={block.title} align={TextAlign.CENTER} />
        )}
    </VStack>
));
