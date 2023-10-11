import React, { useRef } from "react";
import { language } from "../utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config?.lang);
  const searchInput = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };
  const onSearchText = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchInput.current.value +
      ". only give me names of 5 movies, comma separated like the example result given head. Example Result: RRR, PUSHPA, BAHUBALI, OG, JALSA";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.choices);
    const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((item) => searchMovieTmdb(item));
    const tmdbRsults = await Promise.all(promiseArray);
    console.log(tmdbRsults);
    dispatch(addGptMovies({ movieNames: gptMovies, movieResults: tmdbRsults }));
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInput}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[lang].placeholderText}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={onSearchText}
        >
          {language[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
