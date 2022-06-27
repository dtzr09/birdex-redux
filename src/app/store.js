import { configureStore } from '@reduxjs/toolkit';
import SpeciesReducer from '../feature/SpeciesSlice'
import BirdsReducer from '../feature/BirdsSlice'

export const store = configureStore({
  reducer: {
    species: SpeciesReducer,
    birds: BirdsReducer
  },
});
