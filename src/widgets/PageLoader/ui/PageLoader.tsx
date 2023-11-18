import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, Loader } from '@/shared/ui';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader: FC<PageLoaderProps> = memo(({ className }: PageLoaderProps) => (
    <HStack
        justify="center"
        className={classNames(styles.pageLoader, { additional: [className] })}
    >
        <Loader />
    </HStack>
));

export default PageLoader;
