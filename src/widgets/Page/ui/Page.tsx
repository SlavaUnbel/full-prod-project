import { ApplicationState } from 'app/providers/StoreProvider';
import { scrollRestorationActions, scrollRestorationByPathSelector } from 'features/ScrollRestoration';
import {
    FC, memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInifiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';

import { useThrottle } from 'shared/lib/hooks/useThrottle';
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
        <section
            ref={wrapperRef}
            className={classNames(styles.page, {
                mods: {},
                additional: [className],
            })}
            onScroll={handleScroll}
        >
            {children}

            <div ref={triggerRef} />
        </section>
    );
});
