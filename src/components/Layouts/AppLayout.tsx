import { Layout } from 'antd';
import LeftNavigation from '../LeftNavigation';
import React from 'react';

interface ApplicationLayoutProps {
    children: React.ReactNode;
}

const { Content } = Layout;

const ApplicationLayout: React.FC<ApplicationLayoutProps> = ({ children }) => (
    <Layout style={{ minHeight: '100vh' }}>
        <LeftNavigation />
        <Layout style={{ marginLeft: '330px' }}>
            <Layout style={{ background: '#fff' }}>
                <Content
                    style={{
                        margin: 0,
                        minHeight: 280,
                        background: '#ffffff',
                    }}
                >
                {children}
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default ApplicationLayout;
