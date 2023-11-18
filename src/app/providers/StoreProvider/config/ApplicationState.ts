import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ProfileSchema } from '@/entities/Profile';
import { UserSchema } from '@/entities/User';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ScrollRestorationSchema } from '@/features/ScrollRestoration';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';

import { rtkApi } from '@/shared/api/rtkApi';
import { AppDispatch } from './store';

export interface ApplicationState {
    user: UserSchema;
    scrollRestoration: ScrollRestorationSchema;

    // Асинхронные редьюсеры
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;

    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type ApplicationStateKey = keyof ApplicationState;

export type MountedReducers = OptionalRecord<ApplicationStateKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<ApplicationState>;
    reduce: (state: ApplicationState, action: AnyAction) => CombinedState<ApplicationState>;
    add: (key: ApplicationStateKey, reducer: Reducer) => void;
    remove: (key: ApplicationStateKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<ApplicationState> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: ApplicationState;
    dispatch: AppDispatch;
}
