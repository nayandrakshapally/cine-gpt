import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className='px-6'>
      <h1 className='text-2xl py-4 text-white'>{title}</h1>
      <div className="flex overflow-x-auto">
      <div className="flex">
        {movies?.map((movie) => {
          return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default MoviesList;
