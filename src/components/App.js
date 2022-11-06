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

// Admin Pages
import Users from "../admin/Users";
import Websites from "../admin/Websites";

import "../assets/style/app.css";
import Favourites from "../pages/Favourites";
import RPC from "../pages/RPC";

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
          <Route path="/pages/favourites" element={<Favourites />} />
          <Route path="/pages/rpc" element={<RPC />} />
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

// TODO:
/*
 * Admin Webistes : plus button + pop up (same login page) + edit icon (same login page) + pagination
 * Requests (sidebar): name of websites + link + submit
 * Fake Authentication ✅
 */
