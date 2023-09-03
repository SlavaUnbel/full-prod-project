import { ApplicationState } from 'app/providers/StoreProvider';

export const profileStateSelector = (state: ApplicationState) => state.profile;

export const profileDataSelector = (state: ApplicationState) => profileStateSelector(state)?.data;

export const profileLoadingSelector = (state: ApplicationState) => profileStateSelector(state).isLoading;

export const profileErrorSelector = (state: ApplicationState) => profileStateSelector(state)?.error;
