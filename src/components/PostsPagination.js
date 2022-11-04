import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const arrowDownIcon = <FontAwesomeIcon icon={faCaretDown} />;

export default function PostsPagination() {
  const articlesCount = [10, 20, 30, 40, 50];
  const [openList, setOpenList] = React.useState(false);
  const [selectedCount, setSelectedCount] = React.useState(articlesCount[0]);
  const listIconRef = React.useRef(null);

  const applyArticlesOnClick = (e) => {
    if (listIconRef.current) {
      setSelectedCount(e.target.textContent);
      setOpenList(false);
    }
  };

  return (
    <div className="app_pagination flex justify-center items-center flex-col md:flex-row mt-[16.5rem]">
      <div className="app_pagination-stack border-[1px] rounded-full py-[15px] mr-[18px] text-[10px] order-2 md:order-1">
        <Stack spacing={2}>
          <Pagination count={selectedCount} />
        </Stack>
      </div>

      <div className="app_pagination-articles_count app_navbar-items_language cursor-pointer relative pr-6 font-[200] mb-8 md:mb-0 order-1 md:order-2">
        <div
          className="app_navbar-items_language-icon flex justify-between py-2 px-4 border-2 rounded-full text-[12px] md:text-[20px] font-[300]"
          onClick={() => setOpenList(!openList)}
          ref={listIconRef}
        >
          <span>{arrowDownIcon}</span>
          <span className="ml-2">{selectedCount}</span>
          <span>Articles</span>
        </div>
        <ul
          className={`px-1 absolute left-0 w-full rounded text-[12px] md:text-[20px] ${
            openList ? "block" : "hidden"
          }`}
        >
          {articlesCount.map((count, i) => {
            return (
              <li
                className="cursor-pointer border-b-[1px] py-2"
                onClick={(e) => applyArticlesOnClick(e)}
                key={i}
              >
                {count}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
