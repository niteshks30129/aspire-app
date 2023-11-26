import './assets/styles/main.css';
import React from 'react';
import { withErrorBoundaryWrapper } from './components/ErrorBoundary';
import ErrorFallback from './components/ErrorBoundary/ErrorFallback';
import AppRoutes from './routes/AppRoutes';

const AppRoutesErrorBoundary = withErrorBoundaryWrapper(AppRoutes, ErrorFallback);

const App: React.FC = () => {
    return <AppRoutesErrorBoundary />;
};

export default App;
