/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { counterValueSelector } from '../model/selectors/counterSelector';
import { counterActions } from '../model/slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(counterValueSelector);

    const inc = () => {
        dispatch(counterActions.increment());
    };

    const dec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-title">
                Count:
                { count }
            </h1>

            <Button onClick={inc} data-testid="inc-btn">
                inc
            </Button>

            <Button onClick={dec} data-testid="dec-btn">
                dec
            </Button>
        </div>
    );
};

export default Counter;
