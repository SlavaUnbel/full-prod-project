import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '../../../shared/lib/componentRender/componentRender';
import Sidebar from '../ui/Sidebar/Sidebar';

// Разобраться, почему Jest не воспринимает абсолютные пути
describe.skip('Sidebar', () => {
    it('should button be in the document', () => {
        componentRender(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    it('should button be in the document', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');

        expect(toggleBtn).toBeInTheDocument();

        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
