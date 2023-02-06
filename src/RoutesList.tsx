import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./goga/test";
import MainPage from "./main/mainPage";
import SignInPage from "./signIn/signInPage";
import UserAccount from "./userAccount/userAccountPage";
export function RoutesList() {
  // const { children } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/q" element={<Test />} />
        <Route path="main" element={<MainPage />} />
        <Route path="user" element={<UserAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
