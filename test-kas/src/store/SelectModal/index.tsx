import { createSlice } from "@reduxjs/toolkit";

const SelectSlice = createSlice({
  name: "selectModal",
  initialState: { isOpen: false },
  reducers: {
    showSelectModal: (state) => {
      state.isOpen = true;
    },
    hideSelectModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showSelectModal, hideSelectModal } = SelectSlice.actions;

export { SelectSlice };
