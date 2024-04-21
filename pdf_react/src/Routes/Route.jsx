import React, { useState, useEffect, useContext, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";

import WordToPDF from "../pages/WordToPDF";
import UserContext from "../pages/UserContext";
import { decodeToken } from "react-jwt";
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
        <UserContext.Provider value={{ adu, setadu }}>
          <Routes>
            <Route path="/word_to_pdf" element={<WordToPDF />} />

            <Route element={<ProtectedRoutes />}>
              <Route element={<Layout />}>
                <Route index path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/admin/PrivacyPolicy"
                  element={<Privacy_policy />}
                />
                <Route
                  path="/admin/TermsandConditions"
                  element={<TermsandConditions />}
                />
                <Route
                  path="/admin/ChangePassword"
                  element={<ChangePassword />}
                />
                <Route path="/admin/registerUser" element={<Register />} />
                <Route path="/admin/Appusers" element={<Listusers />} />
                <Route
                  path="/admin/StoreUsersList"
                  element={<ListStoreUsers />}
                />
                <Route
                  path="/admin/AdminGuestUsers"
                  element={<AdminGuestUsers />}
                />
                <Route
                  path="/admin/view_user_profile"
                  element={<ViewUserProfile />}
                />
                <Route path="/admin/Chat" element={<Chat />}>
                  <Route
                    path="/admin/Chat/chatuser/:ind"
                    element={<ChatArea />}
                  />
                </Route>
                <Route path="/admin/myaccount" element={<AdminProfile />} />
              </Route>
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
};
export default Route;
