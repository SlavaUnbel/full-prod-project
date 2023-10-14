import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.articlePage, {
            mods: {},
            additional: [className],
        })}
        >
            ArticlesPage
        </div>
    );
};

export default ArticlesPage;
