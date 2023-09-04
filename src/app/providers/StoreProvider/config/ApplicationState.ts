import {
    AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { NavigateOptions, To } from 'react-router-dom';

export interface ApplicationState {
    user: UserSchema;

    // Асинхронные редьюсеры
    login?: LoginSchema;
    profile?: ProfileSchema;
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

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}
