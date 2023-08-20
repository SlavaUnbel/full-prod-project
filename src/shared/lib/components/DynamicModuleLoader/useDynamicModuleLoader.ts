import { useEffect } from 'react';
import { ApplicationStateKey, ReduxStoreWithManager } from 'app/providers/StoreProvider/config/ApplicationState';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

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
    const dispatch = useDispatch();

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
