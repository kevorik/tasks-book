import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./signIn/signInPage";
import UserAccount from "./userAccount/userAccountPage";
export function RoutesList() {
  // const { children } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="user" element={<UserAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
