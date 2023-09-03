import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/types';
import { ApplicationState, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';
import { Suspense } from 'react';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<ApplicationState>> = {
    login: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    initialState: DeepPartial<ApplicationState>,
    asyncReducers?: DeepPartial<ReducersMapObject<ApplicationState>>,
) => (story: () => StoryFn) => (
    <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Suspense fallback="">
            { story() }
        </Suspense>
    </StoreProvider>
);
