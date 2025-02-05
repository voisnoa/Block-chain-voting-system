import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
// eslint-disable-next-line no-unused-vars
import React from "react";
import VoterRegistration from "./pages/VoterRegistration";
import VoterPage from "./pages/VoterPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/results" element={<Results/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register-voter" element={<VoterRegistration />} />
        <Route path="/vote" element={<VoterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
