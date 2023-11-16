import { Story } from '@storybook/react';
import { ApplicationState, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { loginReducer } from 'features/AuthByUsername';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';
import { articlesPageReducer } from 'pages/ArticlesPage';
import { Suspense } from 'react';
import { ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlesPageReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    initialState: DeepPartial<ApplicationState>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </StoreProvider>
);
