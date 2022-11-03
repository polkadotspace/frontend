import React from "react";

import deleteMark from "../assets/images/deleteMark.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;
const microphoneIcon = <FontAwesomeIcon icon={faMicrophone} />;

// This Components Style Is Included In _search.scss
const SearchBar = ({ value, setValue, handleValue }) => {
  return (
    <div className="app_search-input w-full lg:w-2/3 relative overflow-hidden">
      <span className="absolute left-[1.16px] rounded-[46px] top-[20%] cursor-pointer bg-white px-6">
        {searchIcon}
      </span>
      <input
        type="text"
        className="w-full border-2 rounded-[46px] h-[4.5rem] indent-[60px] lg:indent-[90px]"
        value={value}
        onInput={handleValue}
      />
      <span
        className={`absolute right-24 top-0 font-[200] -mr-6 pr-[1.8rem] border-r-2 py-5 ${
          value && value.length > 0 ? "block" : "hidden"
        }`}
      >
        <img
          className="w-10 px-1 cursor-pointer bg-white h-[4rem] -top-[18px] xl:-top-[19px] left-[29px] relative"
          src={deleteMark}
          alt="Delete Search Text"
          onClick={() => setValue("")}
        />
      </span>
      <span className="absolute rounded-r-[46px] right-[1.3px] top-[20%] px-6 cursor-pointer bg-white">
        {microphoneIcon}
      </span>
    </div>
  );
};

export default SearchBar;
