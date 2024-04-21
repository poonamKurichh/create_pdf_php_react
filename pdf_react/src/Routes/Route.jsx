import React, { useState, useEffect, useContext, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";

import WordToPDF from "../Pages/WordToPDF";
//import UserContext from "../Pages/UserContext";

import { baseUrl } from "../component/baseUrl";

const Route = () => {
  useEffect(() => {
    if (performance.getEntriesByType("navigation")[0].type === "reload") {
      //getAdmin();
    }
    //getAdmin();
  }, []);

  return (
    <>
      <BrowserRouter>
        {/*<UserContext.Provider value={{ adu, setadu }}>*/}
        <Routes>
          <Route path="/word_to_pdf" element={<WordToPDF />} />

          <Route element={<ProtectedRoutes />}></Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
        {/*</UserContext.Provider>*/}
      </BrowserRouter>
    </>
  );
};
export default Route;
