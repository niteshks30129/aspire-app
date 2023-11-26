import { Card, Result } from 'antd';
import React from 'react';

const NotFound = () => {
    return (
        <Card
            bordered={false}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}
        >
            <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
        </Card>
    );
};

export default NotFound;
