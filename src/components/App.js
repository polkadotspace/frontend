import React from "react";

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
import AccountChange from "../pages/AccountChange";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Blog";
import BlogArticle from "../pages/BlogArticle";
import AddArticle from "../pages/AddArticle";

// Admin Pages
import Users from "../admin/Users";
import Websites from "../admin/Websites";

import "../assets/style/app.css";
import Favourites from "../pages/Favourites";

const App = () => {
  return (
    <main className="app relative h-screen overflow-x-hidden">
      <span></span>
      <span></span>
      <span></span>
      <div className="container flex flex-col m-auto">
        <div className="Navabr">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/pages/search" element={<Search />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/register" element={<Register />} />
          <Route path="/pages/profile" element={<Profile />} />
          <Route path="/pages/accountchange" element={<AccountChange />} />
          <Route path="/pages/favourites" element={<Favourites />} />
          <Route path="/pages/blog" element={<Blog />} />
          <Route path="/pages/blogarticle" element={<BlogArticle />} />
          <Route path="/pages/addarticle" element={<AddArticle />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/websites" element={<Websites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
