import { ApplicationState } from 'app/providers/StoreProvider/config/ApplicationState';

export const counterStateSelector = (state: ApplicationState) => state.counter;

export const counterValueSelector = (state: ApplicationState) => counterStateSelector(state).count;
