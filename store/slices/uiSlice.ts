import { createSlice } from "@reduxjs/toolkit";

type UIState = {
  isCartDrawerOpen: boolean;
};

const initialState: UIState = {
  isCartDrawerOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openCartDrawer: (state) => {
      state.isCartDrawerOpen = true;
    },
    closeCartDrawer: (state) => {
      state.isCartDrawerOpen = false;
    },
    toggleCartDrawer: (state) => {
      state.isCartDrawerOpen = !state.isCartDrawerOpen;
    },
  },
});

export const { openCartDrawer, closeCartDrawer, toggleCartDrawer } =
  uiSlice.actions;

export default uiSlice.reducer;
