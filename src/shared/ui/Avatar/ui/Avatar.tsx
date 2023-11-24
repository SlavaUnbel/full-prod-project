import { FC, memo, useMemo } from 'react';

import UserIcon from '../../../assets/icons/user.svg';
import { AppImage } from '../../AppImage';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

const Avatar: FC<AvatarProps> = ({
    className,
    src,
    size = 100,
    alt = '',
    fallbackInverted,
}) => {
    const style = useMemo(() => ({ width: size, height: size }), [size]);

    return (
        <AppImage
            src={src}
            className={classNames(styles.avatar, { additional: [className] })}
            alt={alt}
            style={style}
            fallback={<Skeleton width={size} height={size} border="50%" />}
            errorFallback={
                <Icon
                    inverted={fallbackInverted}
                    Svg={UserIcon}
                    width={size}
                    height={size}
                />
            }
        />
    );
};

export default memo(Avatar);
