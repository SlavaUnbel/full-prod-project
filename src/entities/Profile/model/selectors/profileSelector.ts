import { Profile } from '../types/profile';

import { ApplicationState } from '@/app/providers/StoreProvider';

export const profileStateSelector = (state: ApplicationState) => state.profile;

export const profileDataSelector = (state: ApplicationState) => profileStateSelector(state)?.data ?? {} as Profile;

export const profileFormSelector = (state: ApplicationState) => profileStateSelector(state)?.form;

export const profileLoadingSelector = (state: ApplicationState) => profileStateSelector(state)?.isLoading;

export const profileErrorSelector = (state: ApplicationState) => profileStateSelector(state)?.error;

export const profileReadonlySelector = (state: ApplicationState) => profileStateSelector(state)?.readonly;

export const profileValidateErrorsSelector = (state: ApplicationState) => profileStateSelector(state)?.validateErrors;
