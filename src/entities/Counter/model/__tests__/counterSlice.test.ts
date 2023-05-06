import { counterActions, counterReducer } from '../slice/counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
    const state: CounterSchema = {
        count: 10,
    };

    it('should increment count value by 1 on increment action dispatch', () => {
        expect(counterReducer(state, counterActions.increment())).toEqual({
            count: 11,
        });
    });

    it('should decrement count value by 1 on decrement action dispatch', () => {
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            count: 9,
        });
    });

    it('should action dispatch when state is undefined', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            count: 1,
        });
    });
});
