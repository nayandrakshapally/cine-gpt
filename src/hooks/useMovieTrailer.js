import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerMovie } from "../utils/moviesSlice";

const useMovieTrailer = ( movieId ) => {
  const dispatch = useDispatch();
  const isTrailer = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerMovie(trailer));
  };

  useEffect(() => {
    !isTrailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
