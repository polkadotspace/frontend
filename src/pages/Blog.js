import React from "react";

import BlogSidebar from "../components/BlogSidebar";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  return (
    <div className="app_blog">
      <h1 className="w-6/6 mb-16 text-center text-[26px] md:text-[70px] font-[800]">
        RPC
      </h1>
      <div className="flex">
        <div className="w-6/6 lg:w-4/6 lg:pr-20">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
        <div
          className={`w-2/6 border-l-2 pl-8 h-[${
            document.querySelector(".app_blog") &&
            document.querySelector(".app_blog").offsetHeight
          }px] hidden lg:block`}
        >
          <h2 className="text-[16px] font-[600] mb-10">
            More From Polkadotspace
          </h2>
          <BlogSidebar />
          <BlogSidebar />
          <BlogSidebar />
          <BlogSidebar />
          <BlogSidebar />

          <div className="app_blogsidebar-topics mt-[25px] lg:mt-[58px]">
            <h3 className="text-[15px]">Recommended topics</h3>
            <div className="app_blog-box_tags flex flex-wrap">
              {["Programing", "UI/UX", "BTC", "Polkadot"].map((topic, i) => {
                return (
                  <span
                    className="my-2 mr-2 py-[4px] md:py-[9px] px-[8px] md:px-[30px] text-[10px] md:text-[15px] cursor-pointer bg-[#E6007A] rounded-[34px] text-white"
                    key={i}
                  >
                    {topic}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
