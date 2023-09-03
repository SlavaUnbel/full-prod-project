import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader: FC<PageLoaderProps> = memo(({ className }: PageLoaderProps) => (
    <div
        className={classNames(styles.pageLoader, {
            mods: {},
            additional: [className],
        })}
    >
        <Loader />
    </div>
));

export default PageLoader;
