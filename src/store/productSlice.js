import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  //   extraReducers use to handle api error and fullfilled
  extraReducers: (builder) => {
    builder
      .addCase(getproducts.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getproducts.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

// this is for async operation  and its thunk middleware
export const getproducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  console.log(result, "result");
  return result;
});

// normal api call function
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
//     console.log(result, "sdfsdf");
//     dispatch(fetchProducts(result));
//   };
// }
