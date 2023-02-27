

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import packingListReducer from '../features/packing-list/packingListSlice';
import binListReducer from '../features/bin-list/binListSlice';
import categoryReducer from '../features/category/categorySlice';

export const store = configureStore({
  reducer: {
    packingList: packingListReducer,
    category: categoryReducer,
    binList: binListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;