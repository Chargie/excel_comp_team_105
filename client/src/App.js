import React from "react";
import "./App.css";

// Custom Components --Used
import SignUp from "./Components/Pages/sign-up page/SignUp";
import LoginPage from "./Components/Pages/login_page/LoginPage";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import LandingPage from "./Components/Pages/landing-page/LandingPage";
import DashboardHome from "./Components/Pages/dashboard_home/DashboardHome";

import DashboardNpsf from "./Components/Pages/dashboard-new project_single file/DashboardNpsf";
import DashboardCompare2Files from "./Components/Pages/dashboard_compare2files/DashboardCompare2Files";
import DashboardCompare from "./Components/Pages/dashboard_compare_single/DashboardCompare";
import DashboardRemoveDupSingle from "./Components/Pages/dashboard_remove_dupl_single/DashboardRemoveDupSingle";

// React router
import { Routes, Route } from "react-router-dom";

// Firebase
import { monitorAuthState } from "./Firebase/firebase.utils";

// Context
import { UserContext } from "./Contexts/userContext";

function App() {
  // const [currentUser, setCurrentUser] = React.useState({});
  const { setCurrentUser, currentUser } = React.useContext(UserContext);

  console.log(currentUser);
  React.useEffect(() => {
    const unsub = monitorAuthState(setCurrentUser);
    return () => unsub();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard-home" element={<DashboardHome />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
