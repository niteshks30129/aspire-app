import { HomeMenuItem, CardMenuItem, PaymentsMenuItem, CreditMenuItem, SettingsMenuItem } from './items';



/**
 * @function GetAccessControlledNav - Get access controlled nav config
 */
export const GetAccessControlledNav = () => {
    // Generate allowed navigation keys
    // const allowedNavKeys = GetAllowedNavKeys();

    /**
     * @function rbacNavigation
     * @param key - Same key to be used as in routeConfig : src/routes/index.tsx
     * @returns access check for the key supplied
     */
    const leftNavMenuConfig = [HomeMenuItem, CardMenuItem, PaymentsMenuItem, CreditMenuItem, SettingsMenuItem];

    return leftNavMenuConfig;
};
