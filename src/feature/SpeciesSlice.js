import { createSlice, current } from "@reduxjs/toolkit";

//shows all the species
//Each species will have different birds of different name
const initialState = [
  {
    id: 1,
    name: "American Robin",
    description:
      "Widespread, common, and conspicuous, these medium-size birds can be found in every state in the Lower 48, every Canadian province, and Alaska. They are easy to spot with their rusty orange bellies and gray backs. Often seen running upright across lawns and meadows while foraging for worms, robins can be found from cities and towns to parks and forests, where their rich, throaty songs provide a constant soundtrack to our daily lives.",
    img: "https://nas-national-prod.s3.amazonaws.com/aud_gbbc-2016_american-robin_32533_kk_ca_photo-donald_metzner.jpg",
  },
  {
    id: 2,
    name: "Northern Cardinal",
    description:
      "Widespread, common, and conspicuous, these medium-size birds can be found in every state in the Lower 48, every Canadian province, and Alaska. They are easy to spot with their rusty orange bellies and gray backs. Often seen running upright across lawns and meadows while foraging for worms, robins can be found from cities and towns to parks and forests, where their rich, throaty songs provide a constant soundtrack to our daily lives.",
    img: "https://nas-national-prod.s3.amazonaws.com/aud_gbbc-2016_american-robin_32533_kk_ca_photo-donald_metzner.jpg",
  },
  {
    id: 3,
    name: "Blue Jay",
    description:
      "Widespread, common, and conspicuous, these medium-size birds can be found in every state in the Lower 48, every Canadian province, and Alaska. They are easy to spot with their rusty orange bellies and gray backs. Often seen running upright across lawns and meadows while foraging for worms, robins can be found from cities and towns to parks and forests, where their rich, throaty songs provide a constant soundtrack to our daily lives.",
    img: "https://nas-national-prod.s3.amazonaws.com/apa_2016_stellers-jay_markus_hoeckner_kk.jpg",
  },
  {
    id: 4,
    name: "Crow",
    description:
      "Widespread, common, and conspicuous, these medium-size birds can be found in every state in the Lower 48, every Canadian province, and Alaska. They are easy to spot with their rusty orange bellies and gray backs. Often seen running upright across lawns and meadows while foraging for worms, robins can be found from cities and towns to parks and forests, where their rich, throaty songs provide a constant soundtrack to our daily lives.",
    img: "https://nas-national-prod.s3.amazonaws.com/aud_gbbc-2016_american-robin_32533_kk_ca_photo-donald_metzner.jpg",
  },
];

const SpeciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    addSpecies: (state, action) => {
      const newSpecies = {
        id: Math.random(),
        name: action.payload.name,
        description: action.payload.desc,
        img: action.payload.img,
        date: new Date(Date.now()).toLocaleString().split(",")[0],
      };
      state.push(newSpecies);
    },

    deleteSpecies: (state = initialState, action) => {
      return state.filter((birds) => birds.name != action.payload.name);
    },

    updateSpecies: (state = initialState, action) => {
      console.log(state.species.map((birds) => console.log(current(birds))));
      return {
        ...state,
        species: state.species.map((birds) =>
          birds.id === action.payload.id
            ? { ...birds, description: birds.description, img: birds.img }
            : birds
        ),
      };
    },
  },
});

export const { addSpecies, deleteSpecies, updateSpecies } =
  SpeciesSlice.actions;

//export posts reducer function so that it can be imported into store.js
export default SpeciesSlice.reducer;
