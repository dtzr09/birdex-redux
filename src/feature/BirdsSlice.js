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
    img: "https://media.istockphoto.com/photos/eastern-bluebirds-male-and-female-picture-id183412466?k=20&m=183412466&s=612x612&w=0&h=xaDRkk-cq7jZglzGO-UTn8Y0tNMHqFBnI5-tIzM68c0=",
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
    img: "https://media.istockphoto.com/photos/eastern-bluebirds-male-and-female-picture-id183412466?k=20&m=183412466&s=612x612&w=0&h=xaDRkk-cq7jZglzGO-UTn8Y0tNMHqFBnI5-tIzM68c0=",
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
    img: "https://media.istockphoto.com/photos/eastern-bluebirds-male-and-female-picture-id183412466?k=20&m=183412466&s=612x612&w=0&h=xaDRkk-cq7jZglzGO-UTn8Y0tNMHqFBnI5-tIzM68c0=",
  },
  {
    id: 4,
    species_id: 1,
    name: "Harry",
    sex: "M",
    species: "American Robin",
    weights: [
      {
        weight: "20",
        created_at: "1/1/2000",
      },
    ],
    img: "https://media.istockphoto.com/photos/eastern-bluebirds-male-and-female-picture-id183412466?k=20&m=183412466&s=612x612&w=0&h=xaDRkk-cq7jZglzGO-UTn8Y0tNMHqFBnI5-tIzM68c0=",
  },
  {
    id: 5,
    species_id: 4,
    name: "Harry",
    sex: "M",
    species: "Crow",
    weights: [
      {
        weight: "20",
        created_at: "1/1/2000",
      },
    ],
    img: "https://media.istockphoto.com/photos/eastern-bluebirds-male-and-female-picture-id183412466?k=20&m=183412466&s=612x612&w=0&h=xaDRkk-cq7jZglzGO-UTn8Y0tNMHqFBnI5-tIzM68c0=",
  },
];

const birdsSlice = createSlice({
  name: "birds",
  initialState,
  reducers: {
    addBird: (state = initialState, action) => {
      const newBird = {
        id: action.payload.id,
        species_id: action.payload.speciesId,
        name: action.payload.name,
        sex: action.payload.sex,
        species: action.payload.species,
        weights: [
          {
            weight: action.payload.weight,
            created_at: new Date(Date.now()).toLocaleString().split(",")[0],
          },
        ],
        img: action.payload.img,
      };
      state.push(newBird);
      console.log(current(state));
    },

    deletebird: (state = initialState, action) => {
      let i;
      for (i = 0; i < state.length; i++) {
        if (state[i].id == action.payload.id) {
          state.splice(i, 1);
          i--;
        } else {
          continue;
        }
      }
      return state;
    },
  },
});

export const { addBird, deletebird } = birdsSlice.actions;

//export posts reducer function so that it can be imported into store.js
export default birdsSlice.reducer;
