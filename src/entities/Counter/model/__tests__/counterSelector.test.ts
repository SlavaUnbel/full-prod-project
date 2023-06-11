import { DeepPartial } from '@reduxjs/toolkit';
import { ApplicationState } from 'app/providers/StoreProvider';
import { counterStateSelector, counterValueSelector } from '../selectors/counterSelector';

describe('counterSelector', () => {
    const state: DeepPartial<ApplicationState> = {
        counter: {
            count: 10,
        },
    };

    it('should return counter state', () => {
        expect(counterStateSelector(state as ApplicationState)).toEqual({ count: 10 });
    });

    it('should return counter value', () => {
        expect(counterValueSelector(state as ApplicationState)).toEqual(10);
    });
});
