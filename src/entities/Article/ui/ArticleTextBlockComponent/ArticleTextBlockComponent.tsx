import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.ArticleTextBlockComponent, {
            mods: {},
            additional: [className],
        })}
        >
            ArticleTextBlockComponent
        </div>
    );
};
