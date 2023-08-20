import { ApplicationState } from 'app/providers/StoreProvider';

export const loginPasswordSelector = (state: ApplicationState) => state?.login?.password;
