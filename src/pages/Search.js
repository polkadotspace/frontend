import React, { useRef } from "react";

import PostComponent from "../components/PostComponent";
import SearchBar from "../components/SearchBar";
import PostsPagination from "../components/PostsPagination";

const Search = ({ value, setValue, handleValue }) => {
  const filterList = ["All", "Image", "Videos", "Articles", ""];
  const filterListRef = useRef(null);

  const addActiveClass = (e) => {
    const filterListChildren = Array.from(filterListRef.current.children);
    filterListChildren.forEach((child) => {
      if (!child.classList.contains("active")) {
        e.target.classList.add("active");
      } else {
        child.classList.remove("active");
      }
    });
  };

  const renderFilterList = () => {
    return filterList.map((filterText, i) => {
      return (
        <React.Fragment key={i}>
          <li
            className={`cursor-pointer px-10 ${
              filterText === "All" ? "active" : ""
            }`}
            onClick={(e) => addActiveClass(e)}
          >
            {filterText}
          </li>
        </React.Fragment>
      );
    });
  };
  return (
    <div className="app_search">
      <form className="flex flex-col items-start">
        <SearchBar
          value={value}
          setValue={setValue}
          handleValue={handleValue}
        />
        <span className="app_search-results_count text-[1.25rem] ml-10 mt-2 font-[300]">
          about 5000 results
        </span>
      </form>
      <ul
        className="app_search-filter_list flex text-[25px]"
        ref={filterListRef}
      >
        {renderFilterList()}
      </ul>
      <div className="max-w-[75rem]">
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
      </div>
      <div>
        <PostsPagination />
      </div>
    </div>
  );
};

export default Search;
