/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type CardState = {
    card: any;
};

const initialState: CardState = {
    card: null,
};

export const updateCardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        updateCard: (state, action: PayloadAction<any | undefined>) => {
            state.card = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateCard } = updateCardSlice.actions;

export default updateCardSlice.reducer;
