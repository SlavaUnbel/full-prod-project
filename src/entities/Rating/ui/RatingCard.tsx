import {
    FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './RatingCard.module.scss';
import {
    Button,
    Card, HStack, Input, Modal, StarRating, Text, VStack,
} from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    rate?: number;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard: FC<RatingCardProps> = memo(({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    rate = 0,
    onCancel,
    onAccept,
}: RatingCardProps) => {
    const { t } = useTranslation();

    const [isModalOpened, setIsModalOpened] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [isRateAccepted, setIsRateAccepted] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);

        if (hasFeedback) {
            setIsModalOpened(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const handleAccept = useCallback(() => {
        setIsModalOpened(false);
        setIsRateAccepted(true);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const handleCancel = useCallback(() => {
        setIsModalOpened(false);
        setIsRateAccepted(true);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    return (
        <Card className={classNames('', { additional: [className] })}>
            <VStack align="center" gap="gap-xs">
                <Text title={starsCount && isRateAccepted ? `${t('Thanks for rating')}!` : title} />

                <StarRating selectedStars={starsCount} size={40} onSelect={handleSelectStars} />
            </VStack>

            <Modal isOpen={isModalOpened}>
                <VStack max gap="gap-2xl">
                    <Text title={feedbackTitle} />

                    <Input
                        placeholder={t('Your feedback')}
                        value={feedback}
                        onChange={setFeedback}
                    />

                    <HStack justify="end" max gap="gap-m">
                        <Button onClick={handleCancel} theme={ButtonTheme.OUTLINE_RED}>
                            {t('Close')}
                        </Button>
                        <Button onClick={handleAccept}>
                            {t('Send')}
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        </Card>
    );
});
