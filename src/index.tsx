import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from 'app/App';

import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    <StoreProvider>
        <Router>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </Router>
    </StoreProvider>,
    document.getElementById('root'),
);
