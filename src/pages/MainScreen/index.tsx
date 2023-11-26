import { ProtectedLayout } from '../../components/Layouts';
import React from 'react';

export interface MainScreenProps {
    children: React.ReactNode;
}

/**
 * @component MainScreen - Landing page for logged in users
 * @param children {children}
 */
const MainScreen: React.FC<MainScreenProps> = ({ children }) => {
    return <ProtectedLayout>{children}</ProtectedLayout>;
};

export default MainScreen;
