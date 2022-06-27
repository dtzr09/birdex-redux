import { configureStore } from "@reduxjs/toolkit";
import SpeciesReducer from "../feature/SpeciesSlice";
import BirdsReducer from "../feature/BirdsSlice";
import EntriesReducer from "../feature/EntriesSlice";

export const store = configureStore({
  reducer: {
    species: SpeciesReducer,
    birds: BirdsReducer,
    entries: EntriesReducer,
  },
});
