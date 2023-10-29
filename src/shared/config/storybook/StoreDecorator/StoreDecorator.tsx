import { StoryFn } from '@storybook/types';
import { ApplicationState, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { loginReducer } from 'features/AuthByUsername';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage';
import { Suspense } from 'react';
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (
    initialState: DeepPartial<ApplicationState>,
    asyncReducers?: ReducersList,
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
