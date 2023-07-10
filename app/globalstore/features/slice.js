import {createSlice} from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    nombre: "JAB",
  },
  name: "valores",
  initialState: {
    counter: 0,
  },
  reducers: {
    guardarnombre: (state, action) => {
      state.nombre = action.payload;
    },
  },
});
export const {guardarnombre} = Slice.actions;

export default Slice.reducer;
