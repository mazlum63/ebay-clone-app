import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./slices/signinSlice";
import productsReducer from "./slices/productsSlice";
import carouselReducer from './slices/sliderSlice'
import cartReducer from './slices/cartSlice'
import registerReducer from "./slices/registerSlice";


export const store = configureStore({
    reducer: {
        signin: signinReducer,
        products: productsReducer,
        carousel: carouselReducer,
        cart: cartReducer,
        register: registerReducer,
    }
})