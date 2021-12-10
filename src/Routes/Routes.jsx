import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminLogin } from "../Components/AdminLogin";
import { AdminSignUp } from "../Components/AdminSignUp";
import { NavBar } from "../Components/NavBar";
import { AdminDashBoard } from "../Pages/AdminDashBoard";
import { Home } from "../Pages/Home";

export const Router = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignUp />} />
        <Route path="/admin-dashboard" element={<AdminDashBoard />} />
      </Routes>
    </>
  );
};
