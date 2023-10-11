import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const trendingMovie = useSelector((store) => store.movies.trendingMovies);
  const trendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTrendingMovies(json.results))
  };
  useEffect(() => {
    !trendingMovie && trendingMovies();
  }, []);
};
export default useTrendingMovies;
