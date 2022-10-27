import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
			state.push(action.payload)
    }
  },
})

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;