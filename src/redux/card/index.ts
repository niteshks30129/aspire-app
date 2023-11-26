import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CardObject } from '../../types';

type CardState = {
    cards: CardObject[];
    transactions: any;
};

const initialState: CardState = {
    cards: [],
    transactions: null
};

export const updateCardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        updateCard: (state, action: PayloadAction<any | undefined>) => {
            state.cards = action.payload;
        },
        updateCardTransaction: (state, action: PayloadAction<any | undefined>) => {
            state.transactions = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateCard } = updateCardSlice.actions;
export const selectCards = (state: RootState) => state.cards.cards;
export const selectCardTransactions = (state: RootState) => state.cards.transactions;

export default updateCardSlice.reducer;
