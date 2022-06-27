import { createSlice, current } from "@reduxjs/toolkit";

//shows all the species
//Each species will have different birds of different name
const initialState = [
  {
    id: 1,
    name: "American Robin",
    description:
      "The quintessential early bird, American Robins are common sights on lawns across North America, where you often see them tugging earthworms out of the ground. Robins are popular birds for their warm orange breast, cheery song, and early appearance at the end of winter. Though they’re familiar town and city birds, American Robins are at home in wilder areas, too, including mountain forests and Alaskan wilderness",
    img: "https://www.allaboutbirds.org/guide/assets/photo/303441381-480px.jpg",
  },
  {
    id: 2,
    name: "Northern Cardinal",
    description:
      "The male Northern Cardinal is perhaps responsible for getting more people to open up a field guide than any other bird. They’re a perfect combination of familiarity, conspicuousness, and style: a shade of red you can’t take your eyes off. Even the brown females sport a sharp crest and warm red accents. Cardinals don’t migrate and they don’t molt into a dull plumage, so they’re still breathtaking in winter’s snowy backyards. In summer, their sweet whistles are one of the first sounds of the morning.",
    img: "https://www.allaboutbirds.org/guide/assets/photo/297087301-480px.jpg",
  },
  {
    id: 3,
    name: "Blue Jay",
    description:
      "This common, large songbird is familiar to many people, with its perky crest; blue, white, and black plumage; and noisy calls. Blue Jays are known for their intelligence and complex social systems with tight family bonds. Their fondness for acorns is credited with helping spread oak trees after the last glacial period.",
    img: "https://www.allaboutbirds.org/guide/assets/photo/311635911-480px.jpg",
  },
  {
    id: 4,
    name: "American Crow",
    description:
      "American Crows are familiar over much of the continent: large, intelligent, all-black birds with hoarse, cawing voices. They are common sights in treetops, fields, and roadsides, and in habitats ranging from open woods and empty beaches to town centers. They usually feed on the ground and eat almost anything—typically earthworms, insects and other small animals, seeds, and fruit; also garbage, carrion, and chicks they rob from nests. Their flight style is unique, a patient, methodical flapping that is rarely broken up with glides.",
    img: "https://www.allaboutbirds.org/guide/assets/photo/59858041-480px.jpg",
  },
  {
    id: 5,
    name: "Fish Crow",
    description:
      "Not everyone realizes it, but there are two kinds of crows across much of the eastern United States. Looking almost identical to the ubiquitous American Crow, Fish Crows are tough to identify until you learn their nasal calls. Look for them around bodies of water, usually in flocks and sometimes with American Crows. They are supreme generalists, eating just about anything they can find. Fish Crows have expanded their range inland and northward along major river systems in recent decades.",
    img: "https://www.allaboutbirds.org/guide/assets/photo/302400101-480px.jpg",
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
      state.map((birds) => console.log(birds));

      return {
        ...state,
        species: state.map((birds) =>
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
