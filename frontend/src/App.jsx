import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browser from "./components/Browser";
import Profile from "./components/Profile";
import LogOut from "./components/LogOut";
import Details from "./components/Details";

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
          <Route path="/logout" element={<LogOut/>} />
          <Route path="/description/:id" element={<Details/>} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
