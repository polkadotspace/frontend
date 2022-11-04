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
            className={`cursor-pointer md:px-10 ${
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
        <span className="app_search-results_count text-[10px] md:text-[20px] md:ml-[30px] mt-[10px] font-[300]">
          about 5000 results
        </span>
      </form>
      <ul
        className="app_search-filter_list flex justify-between items-start w-[320px] text-[12px] md:text-[25px] font-[500] pr-[79px] border-b-[1px] md:border-0"
        ref={filterListRef}
      >
        {renderFilterList()}
      </ul>
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <div>
        <PostsPagination />
      </div>
    </div>
  );
};

export default Search;
