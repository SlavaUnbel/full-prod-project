import {
    FC, memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { scrollRestorationActions, scrollRestorationByPathSelector } from '@/features/ScrollRestoration';
import { ApplicationState } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInifiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';

import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import styles from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = memo(({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();

    const dispatch = useAppDispatch();

    const scrollPosition = useSelector(
        (state: ApplicationState) => scrollRestorationByPathSelector(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollRestorationActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(styles.page, { additional: [className] })}
            onScroll={handleScroll}
        >
            {children}

            { onScrollEnd && <div ref={triggerRef} className={styles.scrollTrigger} /> }
        </main>
    );
});
