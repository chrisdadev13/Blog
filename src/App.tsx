import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage";
import ControlPage from "./pages/ControlPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/control" element={<ControlPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
