import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, VStack } from 'shared/ui';

import { ArticleTextBlock } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    block: ArticleTextBlock
    className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo(({
    block,
    className,
}: ArticleTextBlockComponentProps) => (
    <VStack
        max
        className={classNames(styles.ArticleTextBlockComponent, {
            mods: {},
            additional: [className],
        })}
    >
        {block.title && (
            <Text
                title={block.title}
                className={styles.title}
            />
        )}

        {block.paragraphs.map((paragraph) => (
            <Text
                key={paragraph}
                text={paragraph}
                className={styles.paragraph}
            />
        ))}
    </VStack>
));
