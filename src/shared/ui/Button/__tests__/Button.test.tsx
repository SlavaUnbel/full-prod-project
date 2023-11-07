import { render, screen } from '@testing-library/react';

import { ButtonTheme } from '../lib/ButtonTheme';
import Button from '../ui/Button';

describe('Button', () => {
    it('should button be in the document', () => {
        render(<Button>ButtonText</Button>);

        expect(screen.getByText('ButtonText')).toBeInTheDocument();
    });

    it('should button have clear class when theme prop is provided', () => {
        render(<Button theme={ButtonTheme.CLEAR}>ButtonText</Button>);

        expect(screen.getByText('ButtonText')).toHaveClass('clear');
    });
});
