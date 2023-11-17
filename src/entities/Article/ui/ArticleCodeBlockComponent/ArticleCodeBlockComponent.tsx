import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code, HStack } from 'shared/ui';

import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    block: ArticleCodeBlock;
    className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo(({
    block,
    className,
}: ArticleCodeBlockComponentProps) => (
    <HStack
        max
        className={classNames('', { additional: [className] })}
    >
        <Code text={block.code} />
    </HStack>
));
