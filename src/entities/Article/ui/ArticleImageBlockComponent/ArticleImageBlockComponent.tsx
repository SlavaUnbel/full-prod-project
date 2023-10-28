import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.articleImageBlockComponent, {
            mods: {},
            additional: [className],
        })}
        >
            ArticleImageBlockComponent
        </div>
    );
};
