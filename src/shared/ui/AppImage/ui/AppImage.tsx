import {
    FC,
    ImgHTMLAttributes,
    ReactElement,
    memo,
    useLayoutEffect,
    useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage: FC<AppImageProps> = memo(
    ({
        className,
        src,
        alt = '',
        fallback,
        errorFallback,
        ...otherProps
    }: AppImageProps) => {
        const [isLoading, setLoading] = useState(true);
        const [hasError, setHasError] = useState(false);

        useLayoutEffect(() => {
            const img = new Image();
            img.src = src ?? '';
            img.onload = () => {
                setLoading(false);
            };
            img.onerror = () => {
                setLoading(false);
                setHasError(true);
            };
        }, [src]);

        if (isLoading && fallback) {
            return fallback;
        }

        if (hasError && errorFallback) {
            return errorFallback;
        }

        return (
            <img
                src={src}
                alt={alt}
                className={classNames('', { additional: [className] })}
                {...otherProps}
            />
        );
    },
);
