import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
// eslint-disable-next-line no-unused-vars
import React from "react";
import VoterRegistration from "./pages/VoterRegistration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register-voter" element={<VoterRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
