import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18n';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Container root is not found');
}
const root = createRoot(container);

root.render(
    <Router>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </Router>,
);
