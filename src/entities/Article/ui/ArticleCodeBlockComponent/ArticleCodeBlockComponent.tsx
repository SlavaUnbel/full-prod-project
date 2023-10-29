import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui';

import { ArticleCodeBlock } from '../../model/types/article';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    block: ArticleCodeBlock;
    className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo(({
    block,
    className,
}: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.articleCodeBlockComponent, {
            mods: {},
            additional: [className],
        })}
        >
            <Code text={block.code} />
        </div>
    );
});
