import { ApplicationState } from 'app/providers/StoreProvider';

export const userStateSelector = (state: ApplicationState) => state.user;

export const userAuthDataSelector = (state: ApplicationState) => userStateSelector(state).authData;
