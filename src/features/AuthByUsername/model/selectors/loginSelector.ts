import { ApplicationState } from 'app/providers/StoreProvider';

export const loginStateSelector = (state: ApplicationState) => state.login;
