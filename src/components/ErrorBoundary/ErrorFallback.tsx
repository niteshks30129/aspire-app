import React from 'react';
import { Result } from 'antd';

export interface ErrorFallbackProps {
    errorMessage?: string;
}

/**
 * @component ErrorFallback
 * @param errorMessage {string} - Custom Error message
 */
const ErrorFallback: React.FC<ErrorFallbackProps> = ({ errorMessage }) => {
    return (
        <Result
            status="500"
            title="Oops! Something went wrong."
            subTitle="Sorry, we're experiencing an error on this page. Please try again later."
        />
    );
};

export default ErrorFallback;
