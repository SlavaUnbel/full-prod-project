import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export const useModal = ({
    animationDelay,
    isOpen,
    onClose,
}: UseModalProps) => {
    const [isClosing, setClosing] = useState(false);
    const [isMounted, setMounted] = useState(false);

    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    const handleClose = useCallback(() => {
        if (onClose) {
            setClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        },
        [handleClose],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);

            clearTimeout(timerRef.current);
        };
    }, [isOpen, handleKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
        }
    }, [isOpen]);

    return {
        isClosing,
        isMounted,
        handleClose,
        handleContentClick,
    };
};
