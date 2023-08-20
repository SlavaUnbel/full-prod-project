import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface ApplicationState {
    user: UserSchema;

    // Асинхронные редьюсеры
    login?: LoginSchema;
}

export type ApplicationStateKey = keyof ApplicationState;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<ApplicationState>;
    reduce: (state: ApplicationState, action: AnyAction) => CombinedState<ApplicationState>;
    add: (key: ApplicationStateKey, reducer: Reducer) => void;
    remove: (key: ApplicationStateKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<ApplicationState> {
    reducerManager: ReducerManager;
}
