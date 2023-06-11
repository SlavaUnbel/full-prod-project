import { ApplicationState } from 'app/providers/StoreProvider';

export const counterStateSelector = (state: ApplicationState) => state.counter;

export const counterValueSelector = (state: ApplicationState) => counterStateSelector(state).count;
