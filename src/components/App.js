import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

// Components
import Main from "./Main";

//Layout
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

// Pages
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

import "../assets/style/app.css";
import Favourites from "../pages/Favourites";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnInputValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <main className="app relative h-screen overflow-x-hidden">
      <span></span>
      <span></span>
      <span></span>
      <div className="container grid grid-rows-12 m-auto">
        <div className="Navabr row-span-2">
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Main
                value={searchValue}
                setValue={setSearchValue}
                handleValue={handleOnInputValue}
              />
            }
          />
          <Route
            path="/pages/search"
            element={
              <Search
                value={searchValue}
                setValue={setSearchValue}
                handleValue={handleOnInputValue}
              />
            }
          />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/register" element={<Register />} />
          <Route path="/pages/profile" element={<Profile />} />
          <Route path="/pages/favourites" element={<Favourites />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="row-span-4">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
