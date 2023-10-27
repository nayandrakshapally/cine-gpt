import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black'>
      <div className="z-20 relative -mt-96 pl-7">
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MoviesList title={"Trending"} movies={movies.trendingMovies} />
      {/* <MoviesList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
