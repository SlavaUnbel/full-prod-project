import {
    FC, Suspense, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { RatingCard } from '@/entities/Rating';
import { Translations } from '@/shared/lib/translations/translations';
import { useGetArticleRatingsQuery, useRateArticleMutation } from '../api/articleRatingApi';
import { userAuthDataSelector } from '@/entities/User';
import { Skeleton } from '@/shared/ui';

interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = memo(({
    articleId,
    className,
}: ArticleRatingProps) => {
    const { t } = useTranslation(Translations.ARTICLES);

    const authData = useSelector(userAuthDataSelector);

    const { data, isLoading } = useGetArticleRatingsQuery({ articleId, userId: authData?.id ?? '' });
    const [rateArticle] = useRateArticleMutation();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticle({
                articleId, userId: authData?.id ?? '', rate: starsCount, feedback,
            });
        } catch (error) {
            console.log(error);
        }
    }, [articleId, authData?.id, rateArticle]);

    const handleAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const handleCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rate = data?.[0]?.rate;

    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <RatingCard
                onAccept={handleAccept}
                onCancel={handleCancel}
                className={classNames('', { additional: [className] })}
                title={t('Rate the article')}
                feedbackTitle={t('Leave your feedback about this article it helps us to improve our services')}
                hasFeedback
                rate={rate}
            />
        </Suspense>
    );
});

export default ArticleRating;
