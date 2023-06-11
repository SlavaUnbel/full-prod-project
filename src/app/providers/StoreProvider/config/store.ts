import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { ApplicationState } from './ApplicationState';

export function createReduxStore(initialState?: ApplicationState) {
    const rootReducers: ReducersMapObject<ApplicationState> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    };

    return configureStore<ApplicationState>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
