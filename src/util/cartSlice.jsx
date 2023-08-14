import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        /**
         * 
         * @param {value} state  - state will uodate the value in the store
         * @param {Object} actions - action will have payload which will give you the proper object
         */
        addItem(state, actions) {
            state.items.push(actions.payload)
        },
        removeItem(state, actions) {
            state.items.length = 0;
        },
        deleteItem(state, actions) {
            state.items = state.items.filter(e => e.id !== actions.payload.id)
            console.log("ITEM", state.items)
        }
    }
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;