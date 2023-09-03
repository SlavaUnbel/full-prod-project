import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';

import { ApplicationState } from './ApplicationState';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: ApplicationState,
    asyncReducers?: ReducersMapObject<ApplicationState>,
) {
    const rootReducers: ReducersMapObject<ApplicationState> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<ApplicationState>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // TODO: поправить типизацию стора
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
