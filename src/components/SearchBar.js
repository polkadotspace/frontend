import React, { useState } from "react";

import deleteMark from "../assets/images/deleteMark.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;
const microphoneIcon = <FontAwesomeIcon icon={faMicrophone} />;

// This Components Style Is Included In _search.scss
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  // Render Delete Function In Search Page
  const renderDeleteSearch = () => {
    if (window.location.href.includes("search")) {
      return (
        <span
          className={`absolute right-[25%] top-[5px] md:top-0 font-[200]${
            searchValue && searchValue.length > 0 ? "block" : "hidden"
          }`}
        >
          <img
            className="w-8 md:w-12 cursor-pointer h-[45px] md:h-[72px] border-r-2 pr-[15px] border-black"
            src={deleteMark}
            alt="Delete Search Text"
            onClick={() => setSearchValue("")}
          />
        </span>
      );
    }
  };

  return (
    <div className="app_search-input w-full relative overflow-hidden">
      <span
        className={`absolute ${
          !window.location.href.includes("search") ? "left-[12%]" : "left-[20%]"
        } top-[15px] md:top-[16px] cursor-pointe text-[17px] md:text-[27px]`}
      >
        {searchIcon}
      </span>
      <input
        type="text"
        className="w-10/12 border-2 rounded-[46px] h-[47px] md:h-[4.5rem] indent-[60px] lg:indent-[90px] text-[15px] md:text-[30px]"
        value={searchValue}
        onChange={handleOnInputValue}
      />

      {renderDeleteSearch()}
      <span
        className={`absolute ${
          !window.location.href.includes("search")
            ? "right-[12%]"
            : "right-[20%]"
        } top-[15px] md:top-[16px] cursor-pointer text-[17px] md:text-[23px]`}
      >
        {microphoneIcon}
      </span>
    </div>
  );
};

export default SearchBar;
