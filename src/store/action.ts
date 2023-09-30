import { Dispatch } from "@reduxjs/toolkit";
import {
  setHeroes,
  setHomeWorld,
  setIsLoading,
  setNextUrl,
  setPrevUrl,
} from "./heroesSlice";

export const getHeroes =
  ({ search, page = 1 }: { search: string; page: number }) =>
  async (dispatch: Dispatch) => {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      search,
    });
    try {
      dispatch(setIsLoading(true));
      const response = await fetch(
        `https://swapi.dev/api/people?${queryParams}`
      );
      const data = await response.json();
      dispatch(setIsLoading(false));
      dispatch(setNextUrl(data.next));
      dispatch(setPrevUrl(data.previous));
      dispatch(setHeroes(data.results));
    } catch (error) {
      dispatch(setIsLoading(false));
      console.log(error);
    }
  };

export const getHomeWorld = (url: string) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(setHomeWorld(data));
    console.log("url", data);
  } catch (error) {
    console.log(error);
  }
};
