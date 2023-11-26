import { Layout, Skeleton } from 'antd';

import ApplicationLayout from './AppLayout';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    loading?: boolean;
}

export const ProtectedLayout: React.FC<LayoutProps> = React.memo(({ children, loading }) => {
    return loading ? (
        <Skeleton active style={{ padding: '24px' }} />
    ) : (
        <ApplicationLayout>{children}</ApplicationLayout>
    );
});

export const PublicLayout: React.FC<LayoutProps> = ({ children }) => {
    return <Layout style={{ minHeight: '100vh' }}>{children}</Layout>;
};
