import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui';
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
}: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.articleImageBlockComponent, {
            mods: {},
            additional: [className],
        })}
        >
            <img src={block.src} className={styles.img} alt={block.title} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
});
