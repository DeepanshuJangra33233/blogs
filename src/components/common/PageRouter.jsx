import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Details from "../../Details";
import NavBar from "../NavBar";
import Preloader from "./Preloader";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Preloader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
