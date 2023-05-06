import { render } from '@testing-library/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nTests';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { DeepPartial } from '@reduxjs/toolkit';
import { ApplicationState } from 'app/providers/StoreProvider/config/ApplicationState';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<ApplicationState>;
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    const {
        route = RoutePath.main,
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    { component }
                </I18nextProvider>
            </MemoryRouter>
            ,
        </StoreProvider>,
    );
}
