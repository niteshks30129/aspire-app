import React from 'react';
import { RouteProps } from 'react-router-dom';
import { ErrorObject } from '../../types';

interface ErrorFallbackProps {
    reset: () => void;
    errorMessage?: string;
}
interface IErrorBoundaryProps {
    onError: React.ComponentType<ErrorFallbackProps>;
    children: React.ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
    errorMessage: string;
}

type ErrorBoundaryProps = RouteProps;

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    state = { hasError: false, errorMessage: '' };

    componentDidCatch(error: Error | ErrorObject, errorInfo: React.ErrorInfo) {
        const errorMessage = error?.message;
        this.setState({ hasError: true, errorMessage });
    }

    reset() {
        this.setState({ hasError: false });
    }

    render() {
        if (this.state.hasError) {
            const { onError } = this.props;
            return React.createElement(onError, {
                reset: this.reset.bind(this),
                errorMessage: this.state.errorMessage,
            });
        }

        return this.props.children;
    }
}

const withErrorBoundaryWrapper = (
    Component: React.ComponentType,
    FallbackComponent: React.ComponentType<ErrorFallbackProps>,
): React.FC<ErrorBoundaryProps> => {
    const Wrapped: React.ComponentType = (props) => {
        return (
            <ErrorBoundary onError={FallbackComponent}>
                <Component {...props} />
            </ErrorBoundary>
        );
    };

    // Format for display in DevTools
    const name = Component.displayName || Component.name || 'Unknown';
    Wrapped.displayName = `withErrorBoundaryWrapper(${name})`;

    return Wrapped;
};

export { withErrorBoundaryWrapper };
