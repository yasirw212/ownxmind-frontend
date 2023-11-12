import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../features/order/orderSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
    reducer: {
        order: orderReducer,
        products: productsReducer
    }
})