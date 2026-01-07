import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browser from "./components/Browser";
import Profile from "./components/Profile";
import Details from "./components/Details";
import Companies from "./components/Companies";
import CompanyCreate from "./components/CompanyCreate";
import CompanySetup from "./components/CompanySetup";
import Adminjobs from "./components/Adminjobs";
import PostJob from "./components/PostJob";

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
          <Route path="/description/:id" element={<Details/>} />

//admin routers 
          <Route path="/admin/companies" element={<Companies/>} />
           <Route path="/admin/companies/create" element={<CompanyCreate/>} />
                      <Route path="/admin/companies/:id" element={<CompanySetup/>} />
                      <Route path="/admin/jobs" element={<Adminjobs/>} />
                      <Route path="/admin/jobs" element={<Adminjobs/>} />
                      <Route path="/admin/jobs/create" element={<PostJob/>} />



        </Routes>
      </Router>
    </div>
  );
};

export default App;
