import React from "react";

import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";

const Main = ({ value, setValue, handleValue }) => {
  // const renderButtons = () => {
  //   if (value) {
  //     return (
  //       <Link to="/pages/search" className="main_btn mt-8">
  //         Search
  //       </Link>
  //     );
  //   } else {
  //     return (
  //       <button className="main_btn mt-8 disabled:opacity-30" disabled>
  //         Search
  //       </button>
  //     );
  //   }
  // };

  return (
    <div className="app_main pt-16 xl:pt-40">
      <div className="container grid grid-rows-12 m-auto">
        <div className="items-center text-center">
          <h1 className="text-[28px] md:text-[70px] font-[700]">
            The multichain vision for <br />
            <span>Web3 </span>starts here
          </h1>
          <form
            className="flex flex-col items-center my-6"
            action="/pages/search"
          >
            <SearchBar
            // value={value}
            // setValue={setValue}
            // handleValue={handleValue}
            />
            <Link
              to="/pages/search"
              className="main_btn mt-8 text-[20px] md:text-[30px] px-[93px] md:px-[172px]"
            >
              Search
            </Link>
          </form>
          <div className="flex justify-evenly">
            <button className="btn text-[12px] md:text-[20px] px-[32px] md:px-[57px]">
              Polkadot Search
            </button>
            <button className="btn text-[12px] md:text-[20px] px-[32px] md:px-[50px]">
              Feeling Lucky
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
