import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

//pages
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Protected from "./Protected";

const Index = () => {
  const [isLoggedIn, setInsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ? (
        <button
          onClick={() => {
            setInsLoggedIn(!isLoggedIn);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setInsLoggedIn(!isLoggedIn);
          }}
        >
          Log In
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blogs"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Blogs />
            </Protected>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
