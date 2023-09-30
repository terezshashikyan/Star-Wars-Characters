import { createSlice } from "@reduxjs/toolkit";

interface HeroesInterface {
  heroes: [];
  isLoading: boolean;
  homeWorldData: any;
  nextUrl: string;
  prevUrl: string;
  currentPage: number;
}
const initialState: HeroesInterface = {
  heroes: [],
  isLoading: false,
  homeWorldData: {},
  nextUrl: "",
  prevUrl: "",
  currentPage: 1,
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroes: (state, action) => {
      state.heroes = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setHomeWorld: (state, action) => {
      state.homeWorldData = action.payload;
    },
    setNextUrl: (state, action) => {
      state.nextUrl = action.payload;
    },
    setPrevUrl: (state, action) => {
      state.prevUrl = action.payload;
    },
    setCurrentpage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setHeroes,
  setIsLoading,
  setHomeWorld,
  setNextUrl,
  setPrevUrl,
  setCurrentpage,
} = heroesSlice.actions;

export default heroesSlice.reducer;
