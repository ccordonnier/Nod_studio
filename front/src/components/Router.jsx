import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import DetailPeople from "../pages/DetailPeople.jsx"
import ComparePeople from "../pages/ComparePeople.jsx"
import ErrorNotFoundPage from "../pages/ErrorNotFoundPage.jsx"
import People from "../pages/People.jsx";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index path="/people/" element={<People />}/> 
          <Route path="/people/:id" element={<DetailPeople />} />
          <Route path="/compare/:id" element={<ComparePeople />} />
          <Route path="*" element={<ErrorNotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router