import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';

import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation(Translations.ARTICLES);

    return (
        <div className={classNames(styles.articlePage, {
            mods: {},
            additional: [className],
        })}
        >
            {t('ArticlesPage')}
        </div>
    );
};

export default ArticlesPage;
