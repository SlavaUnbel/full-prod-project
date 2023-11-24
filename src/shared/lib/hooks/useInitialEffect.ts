import { useEffect } from 'react';

export const useInitialEffect = (cb: () => void, deps = [] as any[]) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            cb();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
