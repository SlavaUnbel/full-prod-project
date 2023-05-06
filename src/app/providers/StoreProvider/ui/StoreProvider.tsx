import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { ApplicationState } from '../config/ApplicationState';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<ApplicationState>;
}

const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as ApplicationState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
