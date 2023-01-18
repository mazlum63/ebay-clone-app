import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: null
    },

    reducers: {
        addProductsItems: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const { addProductsItems } = productsSlice.actions;
export default productsSlice.reducer