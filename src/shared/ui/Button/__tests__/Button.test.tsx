import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui';
import { ThemeButton } from '../lib/ThemeButton';

describe('Button', () => {
    it('should button be in the document', () => {
        render(<Button>ButtonText</Button>);

        expect(screen.getByText('ButtonText')).toBeInTheDocument();
    });

    it('should button have clear class when theme prop is provided', () => {
        render(<Button theme={ThemeButton.CLEAR}>ButtonText</Button>);

        expect(screen.getByText('ButtonText')).toHaveClass('clear');
    });
});
