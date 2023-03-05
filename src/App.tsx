import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "./pages/LoginPage";
import ControlPage from "./pages/ControlPage";
import LandingPage from "./pages/LandingPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/control" element={<ControlPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
