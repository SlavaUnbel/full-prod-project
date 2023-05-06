import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { ApplicationState } from './ApplicationState';

export function createReduxStore(initialState?: ApplicationState) {
    return configureStore<ApplicationState>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
