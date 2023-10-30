import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverReturnType = [boolean, UseHoverBind];

export const useHover = (): UseHoverReturnType => {
    const [isHovered, setHovered] = useState(false);

    const onMouseEnter = useCallback(() => {
        setHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setHovered(false);
    }, []);

    return useMemo(
        () => [
            isHovered,
            {
                onMouseEnter,
                onMouseLeave,
            },
        ],
        [isHovered, onMouseEnter, onMouseLeave],
    );
};
