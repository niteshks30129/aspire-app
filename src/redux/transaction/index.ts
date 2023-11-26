import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type TransactionState = {
    transactions: any;
};

const initialState: TransactionState = {
    transactions: null,
};

export const updateCardTransactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        updateCardTransaction: (state, action: PayloadAction<any | undefined>) => {
            state.transactions = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateCardTransaction } = updateCardTransactionSlice.actions;
export const selectCardTransactions = (state: RootState) => state.transactions;

export default updateCardTransactionSlice.reducer;
