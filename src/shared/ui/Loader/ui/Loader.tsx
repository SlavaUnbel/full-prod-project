import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames(styles.loader, { additional: [className] })}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
