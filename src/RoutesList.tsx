import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./main/mainPage";
import Test from "./main/mainPage";
import SignInPage from "./signIn/signInPage";
import UserAccount from "./userPage/userPage";
export function RoutesList() {
  // const { children } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="user" element={<UserAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
