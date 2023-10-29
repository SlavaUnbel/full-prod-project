import { ArticleDetails } from 'entities/Article';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';

import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation(Translations.ARTICLES);

    const { id } = useParams<{id: string}>();

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <div className={classNames(styles.articleDetailsPage, {
                mods: {},
                additional: [className],
            })}
            >
                {t('Article is not found')}
            </div>
        );
    }

    return (
        <div className={classNames(styles.articleDetailsPage, {
            mods: {},
            additional: [className],
        })}
        >
            <ArticleDetails id={id || ''} />
        </div>
    );
};

export default ArticleDetailsPage;
