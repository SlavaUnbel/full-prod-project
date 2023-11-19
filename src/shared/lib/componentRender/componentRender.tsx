import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { ApplicationState, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nTests';
import { getRouteMain } from '@/shared/const/routeConfig';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<ApplicationState>;
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = getRouteMain(),
        initialState,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    { component }
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
