import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.articleCodeBlockComponent, {
            mods: {},
            additional: [className],
        })}
        >
            ArticleCodeBlockComponent
        </div>
    );
};
