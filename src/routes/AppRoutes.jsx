import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import AtHome from "../pages/AtHome.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tai-nha" element={<AtHome />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
