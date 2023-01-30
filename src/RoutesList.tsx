import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./signIn/signInPage";
export function RoutesList() {
  // const { children } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
