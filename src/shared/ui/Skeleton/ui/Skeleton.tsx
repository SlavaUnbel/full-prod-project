import { CSSProperties, FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
    height?: string | number;
    width?: string | number;
    border?: string;
    className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ height, width, border, className }) => {
    const additionalStyles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(styles.skeleton, { additional: [className] })}
            style={additionalStyles}
        />
    );
};

export default Skeleton;
