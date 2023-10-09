import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowplayingmovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingmovies";
import useUpcomingMovies from "../hooks/useUpcomingmovies";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
