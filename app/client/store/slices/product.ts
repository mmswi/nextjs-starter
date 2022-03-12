import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState, AppThunk } from '..';

export const ProductSlice = createSlice({
  name: 'product',

  initialState: {
    name: null
  },

  reducers: {
    setProductData: (state, action) => {
      state.name = action.payload;
    }
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', action.payload);

      if (!action.payload.product.name) {
        return state;
      }

      state.name = action.payload.product.name;
    }
  }
});

export const { setProductData } = ProductSlice.actions;

export const selectProduct = (state: AppState) => state.product;

export const fetchProduct =
    (): AppThunk =>
      async dispatch => {
        const timeoutPromise = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

        await timeoutPromise(1000);

        dispatch(
          setProductData('BA DUM DA THUNK')
        );
      };


export default ProductSlice.reducer;