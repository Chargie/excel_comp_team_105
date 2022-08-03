import React from "react";
import "./App.css";

import SignUp from "./Components/Pages/sign-up page/SignUp";
import LoginPage from "./Components/Pages/login_page/LoginPage";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Footer from "./Components/Pages/Footer/Footer";
import DashboardNpsf from "./Components/Pages/dashboard-new project_single file/DashboardNpsf";
import DashboardCompare2Files from "./Components/Pages/dashboard_compare2files/DashboardCompare2Files";
import DashboardCompare from "./Components/Pages/dashboard_compare_single/DashboardCompare";
import DashboardHome from "./Components/Pages/dashboard_home/DashboardHome";
import DashboardRemoveDupSingle from "./Components/Pages/dashboard_remove_dupl_single/DashboardRemoveDupSingle";
import LandingPage from "./Components/Pages/landing-page/LandingPage";

// React router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="log-in" element={<LoginPage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
