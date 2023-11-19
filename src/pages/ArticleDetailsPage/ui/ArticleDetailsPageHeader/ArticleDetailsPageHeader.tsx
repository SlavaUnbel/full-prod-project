import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { articleDetailsDataSelector } from '@/entities/Article';
import { RoutePath } from '@/shared/const/routeConfig';
import { Translations } from '@/shared/lib/translations/translations';
import { Button, HStack } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button';

import { articleDetailsCanEditArticleSelector } from '../../model/selectors/articleDetailsSelector';
import styles from './ArticleDetailsPageHeader.module.scss';

export const ArticleDetailsPageHeader: FC = memo(() => {
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
        <HStack>
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
        </HStack>
    );
});
