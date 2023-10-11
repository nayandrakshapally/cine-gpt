import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import {BG_IMG_URL} from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-50">
        <img
          src={BG_IMG_URL}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
