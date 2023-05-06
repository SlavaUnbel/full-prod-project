import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from 'shared/lib/componentRender/componentRender';
import Counter from '../../ui/Counter';

describe('Counter', () => {
    const initialState = {
        initialState: { counter: { count: 10 } },
    };

    it('should counter title have counter value as its content', () => {
        componentRender(<Counter />, initialState);

        expect(screen.getByTestId('counter-title')).toHaveTextContent('10');
    });

    it('should increment counter value on increment button click', () => {
        componentRender(<Counter />, initialState);

        userEvent.click(screen.getByTestId('inc-btn'));

        expect(screen.getByTestId('counter-title')).toHaveTextContent('11');
    });

    it('should decrement counter value on decrement button click', () => {
        componentRender(<Counter />, initialState);

        userEvent.click(screen.getByTestId('dec-btn'));

        expect(screen.getByTestId('counter-title')).toHaveTextContent('9');
    });
});
