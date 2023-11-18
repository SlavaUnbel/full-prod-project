import { ApplicationState } from '@/app/providers/StoreProvider';

export const loginUsernameSelector = (state: ApplicationState) => state?.login?.username || '';
