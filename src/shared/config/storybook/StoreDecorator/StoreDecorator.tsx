import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/types';
import { ApplicationState, StoreProvider } from 'app/providers/StoreProvider';
import { Suspense } from 'react';

export const StoreDecorator = (initialState: DeepPartial<ApplicationState>) => (story: () => StoryFn) => (
    <StoreProvider initialState={initialState}>
        <Suspense fallback="">
            { story() }
        </Suspense>
    </StoreProvider>
);
