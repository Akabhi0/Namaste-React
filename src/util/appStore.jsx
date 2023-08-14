//This import is importing redux to app
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//Creating the app store 
const appStore = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default appStore;