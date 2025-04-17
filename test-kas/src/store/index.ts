import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { SelectSlice } from "./SelectModal";

const rootReducer = combineReducers({
  [SelectSlice.name]: SelectSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
