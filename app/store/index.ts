import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Action } from 'redux';
import profileReducer from './slices/profile';
import productReducer from './slices/product';

const makeStore = () => configureStore({
  reducer: {
    profile: profileReducer,
    product: productReducer
  },
  devTools: true
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);