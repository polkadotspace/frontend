import React from "react";

import deleteMark from "../assets/images/deleteMark.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;
const microphoneIcon = <FontAwesomeIcon icon={faMicrophone} />;

// This Components Style Is Included In _search.scss
const SearchBar = ({ value, setValue, handleValue }) => {
  return (
    <div className="app_search-input w-2/3 relative overflow-hidden">
      <span className="absolute left-[1.375rem] top-[20%] cursor-pointer">
        {searchIcon}
      </span>
      <input
        type="text"
        className="w-full border-2 rounded-[46px] h-[4.44rem] indent-[91px]"
        value={value}
        onInput={handleValue}
      />
      <span
        className={`absolute right-24 top-0 font-[200] -mr-6 pr-[1.8rem] border-r-2 py-5 ${
          value && value.length > 0 ? "block" : "hidden"
        }`}
      >
        <img
          className="w-8 cursor-pointer"
          src={deleteMark}
          alt="Delete Search Text"
          onClick={() => setValue("")}
        />
      </span>
      <span className="absolute right-[1.6875rem] top-[20%] pl-4 cursor-pointer">
        {microphoneIcon}
      </span>
    </div>
  );
};

export default SearchBar;
