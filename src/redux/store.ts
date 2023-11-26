import updateCardReducer from './card';
import updateCardTransactionReducer from './transaction';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cards: updateCardReducer,
        transactions: updateCardTransactionReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
