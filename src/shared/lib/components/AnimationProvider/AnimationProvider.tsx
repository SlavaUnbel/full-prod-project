import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextProps {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextProps>({});

const getAsyncAnimationModules = async () =>
    Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);

export const useAnimationModules = () =>
    useContext(AnimationContext) as Required<AnimationContextProps>;

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();

    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setLoaded(true);
        });
    }, []);

    const defaultProps = useMemo(
        () => ({
            Spring: SpringRef.current,
            Gesture: GestureRef.current,
            isLoaded,
        }),
        [isLoaded],
    );

    return (
        <AnimationContext.Provider value={defaultProps}>
            {children}
        </AnimationContext.Provider>
    );
};
