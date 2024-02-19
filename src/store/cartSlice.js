import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart", // reducer name haif store ke waha pr daige
  initialState, // state hai
  reducers: {
    // this is reducer and its take object
    add(state, action) {
      //this is action and ui pr dispatch ke time use krege
      state.push(action.payload);
    },
    remove(state, action) {
      console.log(state, "state");
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add,remove } = cartSlice.actions;
export default cartSlice.reducer;
