import React, { useRef, useState } from "react";

import PostComponent from "../components/PostComponent";
import PostsPagination from "../components/PostsPagination";

const Favourites = () => {
  const [filterText, setFilterText] = useState("All");
  // Adding Active Class Link To The Filter
  const filterList = ["All", "Image", "Videos", "Articles", ""];
  const filterListRef = useRef(null);

  const addActiveClass = (e) => {
    const filterListChildren = Array.from(filterListRef.current.children);
    filterListChildren.forEach((child) => {
      if (!child.classList.contains("active")) {
        e.target.classList.add("active");
        setFilterText(e.target.textContent);
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
    <div className="app_favourites">
      <h1 className="text-center text-[30px] md:text-[70px] font-[700]">
        Fa<span>vourites</span>
      </h1>
      <ul
        className="app_search-filter_list flex justify-between items-start w-[320px] text-[12px] md:text-[25px] font-[500] pr-[79px] border-b-[1px] md:border-0"
        ref={filterListRef}
      >
        {renderFilterList()}
      </ul>

      <div>
        <PostComponent filterText={filterText} />
      </div>
      <div>
        <PostsPagination pages="Articles" />
      </div>
    </div>
  );
};

export default Favourites;
