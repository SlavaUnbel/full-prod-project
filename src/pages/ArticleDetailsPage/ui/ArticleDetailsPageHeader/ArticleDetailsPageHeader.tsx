import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';

import { articleDetailsCanEditArticleSelector } from 'pages/ArticleDetailsPage/model/selectors/articleDetailsSelector';
import { articleDetailsDataSelector } from 'entities/Article';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(({
    className,
}: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation(Translations.ARTICLES);

    const navigate = useNavigate();

    const canEdit = useSelector(articleDetailsCanEditArticleSelector);
    const article = useSelector(articleDetailsDataSelector);

    const handleNavigateBack = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const handleEditArticle = useCallback(() => {
        navigate(`${RoutePath['article-details']}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(styles.articleDetailsPageHeader, {
            mods: {},
            additional: [className],
        })}
        >
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={handleNavigateBack}
            >
                {t('Back to the articles list')}
            </Button>

            { canEdit && (
                <Button
                    className={styles.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={handleEditArticle}
                >
                    {t('Edit')}
                </Button>
            ) }
        </div>
    );
});
