import { FC, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

const Avatar: FC<AvatarProps> = memo(({
    className, src, size, alt = '',
}: AvatarProps) => {
    const mods: Mods = {};
    const style = useMemo(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            className={classNames(styles.avatar, { mods, additional: [className] })}
            alt={alt}
            style={style}
        />
    );
});

export default Avatar;
