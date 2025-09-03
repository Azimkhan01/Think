import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { mainFormType } from "../../types/tools";

// Initial state
const initialState: mainFormType = {
  title: "Unnamed Title",
};

// Slice
const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    setMainTitle: (state, actions: PayloadAction<{ value: string }>) => {
      return { ...state, title: actions.payload.value };
    },
    setWork:()=>{}
  },
});

// Export actions
export const { setMainTitle } = workSlice.actions;

// Export reducer
export default workSlice.reducer;
