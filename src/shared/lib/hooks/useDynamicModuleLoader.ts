import { Reducer } from '@reduxjs/toolkit';
import { ApplicationStateKey, ReduxStoreWithManager } from 'app/providers/StoreProvider/config/ApplicationState';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from './useAppDispatch';

export type ReducersList = {
    [key in ApplicationStateKey]?: Reducer;
}

type ReducersListEntry = [ApplicationStateKey, Reducer];

interface UseDynamicModuleLoaderProps {
    reducers: ReducersList;
    removeOnUnmount?: boolean;
}

export const useDynamicModuleLoader = (props: UseDynamicModuleLoaderProps) => {
    const { reducers, removeOnUnmount } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
            store.reducerManager.add(key, reducer);
            dispatch({ type: `@INIT ${key} reducer` });
        });

        return () => {
            if (removeOnUnmount) {
                Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
                    store.reducerManager.remove(key);
                    dispatch({ type: `@REMOVE ${key} reducer` });
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
