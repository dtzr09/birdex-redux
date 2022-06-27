import { createSlice, current } from "@reduxjs/toolkit";

//Show individual birds
const initialState = [
  {
    id: 1,
    species_id: 1,
    name: "Tom",
    sex: "M",
    species: "American Robin",
    weights: [
      {
        weight: "20",
        created_at: "1/1/2000",
      },
      {
        weight: "50",
        created_at: "1/2/2000",
      },
      {
        weight: "80",
        created_at: "1/3/2000",
      },
    ],
    img: "https://www.allaboutbirds.org/guide/assets/photo/59858031-480px.jpg",
  },
  {
    id: 2,
    species_id: 1,
    name: "Mary",
    sex: "M",
    species: "American Robin",
    weights: [
      {
        weight: "20",
        created_at: "1/1/2000",
      },
    ],
    img: "https://www.allaboutbirds.org/guide/assets/photo/303441871-240px.jpg",
  },
  {
    id: 3,
    species_id: 1,
    name: "John",
    sex: "M",
    species: "American Robin",
    weights: [
      {
        weight: "20",
        created_at: "1/1/2000",
      },
    ],
    img: "https://www.allaboutbirds.org/guide/assets/photo/60412921-1280px.jpg",
  },
  {
    id: 4,
    species_id: 1,
    name: "Harry",
    sex: "M",
    species: "American Robin",
    weights: [
      {
        weight: "25",
        created_at: "1/1/2000",
      },
    ],
    img: "https://www.allaboutbirds.org/guide/assets/photo/60412941-240px.jpg",
  },
];

const entriesSlice = createSlice({
  name: "birds",
  initialState,
  reducers: {},
});

// export const {  } = entriesSlice.actions;

//export posts reducer function so that it can be imported into store.js
export default entriesSlice.reducer;
