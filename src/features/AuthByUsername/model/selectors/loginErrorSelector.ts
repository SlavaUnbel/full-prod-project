import { ApplicationState } from '@/app/providers/StoreProvider';

export const loginErrorSelector = (state: ApplicationState) =>
    state?.login?.error;
