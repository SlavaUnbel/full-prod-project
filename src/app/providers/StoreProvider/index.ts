import { ApplicationState, ThunkConfig } from './config/ApplicationState';
import { AppDispatch, createReduxStore } from './config/store';
import StoreProvider from './ui/StoreProvider';

export { StoreProvider, createReduxStore };

export type { ApplicationState, AppDispatch, ThunkConfig };
