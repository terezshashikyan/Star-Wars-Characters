import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../store/action";
import HeroesItem from "../components/HerosItem/HeroesItem";
import "./Heroes.css";
import Spinner from "../components/Spinner/Spinner";
import { setCurrentpage } from "../store/heroesSlice";
import { AppDispatch } from "../store/store";

const Heroes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState<string>("");
  const {
    heroes: { heroes, isLoading, prevUrl, nextUrl, currentPage },
  } = useSelector((state: any) => state);
  console.log("herroes", heroes);

  const handlePrevClick = () => {
    dispatch(setCurrentpage(currentPage - 1));
    dispatch(
      getHeroes({
        page: currentPage - 1,
        search: searchValue,
      })
    );
  };

  const handleNextClick = () => {
    dispatch(setCurrentpage(currentPage + 1));
    dispatch(
      getHeroes({
        page: currentPage + 1,
        search: searchValue,
      })
    );
  };

  const handleSearch = () => {
    dispatch(setCurrentpage(1));
    dispatch(
      getHeroes({
        page: 1,
        search: searchValue,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getHeroes({
        page: currentPage,
        search: searchValue,
      })
    );
    //eslint-disable-next-line
  }, []);
  return isLoading ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div className="heroes-wrapper">
      <div className="input-container">
        <input
          placeholder="Search by name"
          className="search-input"
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="heroes-container">
        {heroes?.map((hero: any) => (
          <HeroesItem heroItem={hero} />
        ))}
      </div>
      <div className="pagination-wrapper">
        <button
          className="pagination-button"
          onClick={handlePrevClick}
          disabled={!prevUrl}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          className="pagination-button"
          onClick={handleNextClick}
          disabled={!nextUrl}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Heroes;
