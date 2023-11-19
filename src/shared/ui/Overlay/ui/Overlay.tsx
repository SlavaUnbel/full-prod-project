import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay: FC<OverlayProps> = memo(({ className, onClick }: OverlayProps) => (
    <div onClick={onClick} className={classNames(styles.overlay, { additional: [className] })} />
));
