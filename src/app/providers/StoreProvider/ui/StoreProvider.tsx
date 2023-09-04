import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ApplicationState } from '../config/ApplicationState';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<ApplicationState>;
    asyncReducers?: DeepPartial<ReducersMapObject<ApplicationState>>;
}

const StoreProvider: FC<StoreProviderProps> = ({
    children, initialState, asyncReducers,
}) => {
    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as ApplicationState,
        asyncReducers as ReducersMapObject<ApplicationState>,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
