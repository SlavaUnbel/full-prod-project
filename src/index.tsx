import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

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
