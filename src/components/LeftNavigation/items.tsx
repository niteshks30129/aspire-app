import { Link } from 'react-router-dom';
import React from 'react';
import type { MenuProps } from 'antd';
import HomeLogo from '../../assets/images/svg/Home';
import CardLogo from '../../assets/images/svg/Card';
import CreditLogo from '../../assets/images/svg/Credit';
import AccountLogo from '../../assets/images/svg/Account';
import PaymentsLogo from '../../assets/images/svg/Payments';
type MenuItem = Required<MenuProps>['items'][number];
/**
 * Define all items
 * ---------------------
 * key: Same key to be used as in routeConfig : src/routes/index.tsx
 * label: <Link to='<you path>'>Menu Item Name</Link>
 * icon: Your preferred icon if any
 */

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
  }


const HomeMenuItem = getItem(<Link to="/home">Home</Link>, '1', <HomeLogo />);
const CardMenuItem = getItem(<Link to="/card">Cards</Link>, '2', <CardLogo/>);
const PaymentsMenuItem = getItem(<Link to="/payment">Payments</Link>, '3', <PaymentsLogo />);
const CreditMenuItem = getItem(<Link to="/credit">Credit</Link>, '4', <CreditLogo />);
const SettingsMenuItem = getItem(<Link to="/setting">Settings</Link>, '5', <AccountLogo/>);


export { HomeMenuItem, CardMenuItem, PaymentsMenuItem, CreditMenuItem, SettingsMenuItem };
