import { ApplicationState } from '@/app/providers/StoreProvider';

export const loginLoadingSelector = (state: ApplicationState) =>
    state?.login?.isLoading || false;
