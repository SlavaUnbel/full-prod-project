import { Reducer } from '@reduxjs/toolkit';
import { ApplicationState, ApplicationStateKey, ReduxStoreWithManager } from 'app/providers/StoreProvider/config/ApplicationState';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from './useAppDispatch';

export type ReducersList = {
    [key in ApplicationStateKey]?: Reducer<NonNullable<ApplicationState[key]>>;
}

interface UseDynamicModuleLoaderProps {
    reducers: ReducersList;
    removeOnUnmount?: boolean;
}

export const useDynamicModuleLoader = ({
    reducers,
    removeOnUnmount = true,
}: UseDynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([key, reducer]) => {
            const mounted = mountedReducers[key as ApplicationStateKey];

            if (!mounted) {
                store.reducerManager.add(key as ApplicationStateKey, reducer);
                dispatch({ type: `@INIT ${key} reducer` });
            }
        });

        return () => {
            if (removeOnUnmount) {
                Object.entries(reducers).forEach(([key]) => {
                    store.reducerManager.remove(key as ApplicationStateKey);
                    dispatch({ type: `@REMOVE ${key} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
