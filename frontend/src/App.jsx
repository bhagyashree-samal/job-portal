import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browser from "./components/Browser";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/jobs" element={<Jobs />} />
          <Route path="/browser" element={<Browser />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
