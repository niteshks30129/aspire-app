

export type ErrorObject = {
    message: string;
    errorCode?: string;
    title?: string;
};

export interface CardBalance {
    amount?: number;
    currency?: string;
}

export interface CardObject {
    cardNumber: string,
    cardHolderName: string,
    expirationDate: string,
    cvv: string,
    bank: string,
    balance: CardBalance;
    isContactless: boolean,
    status: string,
    isActive: boolean
}
export interface MobileCheck {
    isMobile: boolean
}