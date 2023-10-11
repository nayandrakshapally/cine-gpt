import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowplayingmovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingmovies";
import useUpcomingMovies from "../hooks/useUpcomingmovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  const isGptSearchToggle = useSelector((store) => store.gpt?.showGptSearch);
  return (
    <div>
      <Header />
      {isGptSearchToggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
