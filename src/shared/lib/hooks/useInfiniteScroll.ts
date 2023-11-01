import { useEffect, useRef } from 'react';
import { UseInifiniteScrollOptions } from './useInifiniteScroll';

export const useInfiniteScroll = ({
    callback, triggerRef, wrapperRef,
}: UseInifiniteScrollOptions) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const options = {
            root: wrapperRef.current,
            rootMargin: '0',
            threshold: 1,
        };

        const observer = new IntersectionObserver(([entry]) => {
            console.log('intersected');
        }, options);

        observer.observe(triggerRef.current);
    }, []);
};
