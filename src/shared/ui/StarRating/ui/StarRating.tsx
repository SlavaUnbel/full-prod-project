import { FC, memo, useState } from 'react';

import StarIcon from '../../../assets/icons/star.svg';
import { Icon } from '../../Icon';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    size?: number;
    selectedStars?: number;
    onSelect?: (starsCount: number) => void;
}

const starNumbers = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo(
    ({
        className,
        size = 30,
        selectedStars = 0,
        onSelect,
    }: StarRatingProps) => {
        const [currentStarsCount, setCurrentStarsCount] =
            useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        const handleHover = (starsCount: number) => () => {
            if (!isSelected) {
                setCurrentStarsCount(starsCount);
            }
        };

        const handleLeave = () => {
            if (!isSelected) {
                setCurrentStarsCount(0);
            }
        };

        const handleClick = (starsCount: number) => () => {
            if (!isSelected) {
                onSelect?.(starsCount);
                setCurrentStarsCount(starsCount);
                setIsSelected(true);
            }
        };

        return (
            <div className={classNames('', { additional: [className] })}>
                {starNumbers.map((starNumber) => (
                    <Icon
                        className={classNames(styles.icon, {
                            mods: {
                                [styles.hovered]:
                                    currentStarsCount >= starNumber,
                                [styles.selected]: isSelected,
                            },
                        })}
                        Svg={StarIcon}
                        key={starNumber}
                        height={size}
                        width={size}
                        onMouseEnter={handleHover(starNumber)}
                        onMouseLeave={handleLeave}
                        onClick={handleClick(starNumber)}
                    />
                ))}
            </div>
        );
    },
);
