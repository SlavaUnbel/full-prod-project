import { StoryFn } from '@storybook/types';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

export const TranslationDecorator = (story: () => StoryFn) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            { story() }
        </Suspense>
    </I18nextProvider>
);