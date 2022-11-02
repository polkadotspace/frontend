import React from "react";

import PostComponent from "../components/PostComponent";
import PostsPagination from "../components/PostsPagination";

const Favourites = () => {
  return (
    <div className="app_favourites">
      <h1 className="text-center text-[70px] font-[700]">
        Fa<span>vourites</span>
      </h1>
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

export default Favourites;
