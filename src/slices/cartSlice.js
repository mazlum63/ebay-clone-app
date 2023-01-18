import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cartItems',
    initialState: {
        cartItems: []
    },

    reducers: {
        addToCart: (state, action) => {
            if (state.cartItems.length == 0) {
                state.cartItems.push(action.payload)
            } else {
                state.cartItems.map(item => {
                    if (item.id == action.payload.id) {
                        state.cartItems = state.cartItems.filter(produc => produc.id != action.payload.id)
                    }
                })
                state.cartItems.push(action.payload)
            }

        },
        deleteItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id != action.payload)
        },
        emptyCart: (state) => {
            state.cartItems = [];
        }
    }
})


export const { addToCart, deleteItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;