import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
// import PostComponent from "../components/PostComponent";
import SearchBar from "../components/SearchBar";
import PostsPagination from "../components/PostsPagination";
import Filter from "../components/Filter";
import { ARTICLE_SEARCH_URL } from "../commons/constant";
import FavouritePost from "../components/FavouritePost";

const Search = ({ value, setValue, handleValue }) => {
  const [filterText, setFilterText] = useState("All");
  // Adding Active Class Link To The Filter
  const filterList = ["All", "Image", "Videos", "Articles", ""];
  const filterListRef = useRef(null);
  const [searchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams.get('searchKey'));

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
            className={`cursor-pointer md:px-10 ${filterText === "All" ? "active" : ""
              }`}
            onClick={(e) => addActiveClass(e)}
          >
            {filterText}
          </li>
        </React.Fragment>
      );
    });
  };

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [totalCount, setTotalCount] = useState(0);

  const getAllArticles = async (searchValue, page, size) => {
    fetch(`${ARTICLE_SEARCH_URL}?page=${page}&size=${size}&keyword=${searchValue}`, {
      method: 'GET',
      headers: {
        // "Accept": "application/json text/plain",
        "Content-Type": "application/json"
      },
    })
      .then((res) => {
        console.log(`article search res: `, res);
        return res.json()
      })
      .then(data => {
        console.log(`article search data: `, data);
        setArticles(data?.articles)
        setTotalCount(data?.total_elements ? data.total_elements : 0)
      })
      .catch((err) => {
        console.log(`article search err: `, err);
      })
  }

  useEffect(() => {
    getAllArticles(searchValue, page, size);
  }, [searchValue, page, size]);

  console.log(`articles: `, articles);


  return (
    <div className="app_search">
      <div className="flex flex-col items-start">
        <SearchBar
          value={value}
          setValue={setValue}
          setSearchText={setSearchValue}
          handleValue={handleValue}
        />
        <span className="app_search-results_count text-[10px] md:text-[20px] md:ml-[30px] mt-[10px] font-[300]">
          about {totalCount} results
        </span>
      </div>
      <ul
        className="app_search-filter_list flex justify-between items-start w-[320px] text-[12px] md:text-[25px] font-[500] pr-[79px] border-b-[1px] md:border-0"
        ref={filterListRef}
      >
        {renderFilterList()}
      </ul>
      <div>
        <Filter />
      </div>
      <div>
        {
          articles?.map((article, index) => (
            <div key={index}>
              <FavouritePost filterText={filterText} article={article} />
            </div>
          ))
        }
      </div>
      <div>
        {
          articles.length > 0 &&
          <PostsPagination type="Articles" totalCount={totalCount} page={page} setPage={setPage} setSize={setSize} />
        }
      </div>
    </div>
  );
};

export default Search;
