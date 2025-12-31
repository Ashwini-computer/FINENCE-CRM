// App.jsx
import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import ScrollToTop from "@/custom/ScrollToTop";
import AchievementPopup from "@/components/AchievementPopup";
import PrivateRoute from "./routes/PrivateRoute";
import { useContextFile } from "./context/contextFile";

// ROUTES
import { getPrivateRoutes } from "@/routes/getPrivateRoutes";
import { getPublicRoutes } from "@/routes/getPublicRoutes";
import { useDispatch } from "react-redux";
import { checkAuth } from "./machine/authentication/UserAuthentication";

export default function App() {
  const { loggedIn, setLoggedIn } = useContextFile();
  const [loading, setLoading] = useState(true);
  const [showAchievement, setShowAchievement] = useState(false);
  const dispach = useDispatch();

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", "#27548A");
    document.documentElement.style.setProperty("--accent", "#C95792");
  }, []);
  useEffect(() => {
    dispach(checkAuth());
  }, [dispach]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const token = localStorage.getItem('token');
  //     const loginTime = localStorage.getItem('loginTime');
  //     if (token && loginTime) {
  //       const minutesElapsed = (Date.now() - parseInt(loginTime, 10)) / (1000 * 60);
  //       if (minutesElapsed < 40)
  //         setLoggedIn(true);
  //     } else {
  //       localStorage.removeItem('token');
  //       localStorage.removeItem('loginTime');
  //       setLoggedIn(false);
  //     }
  //     setLoading(false);
  //     sessionStorage.setItem("app_loaded_once", "true");
  //   }, sessionStorage.getItem("app_loaded_once") ? 0 : 500);

  //   return () => clearTimeout(timer);
  // }, [setLoggedIn]);

  useEffect(() => {
    const closed = localStorage.getItem("achievement_popup_closed");
    if (!closed) {
      setShowAchievement(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showAchievement ? "hidden" : "auto";
  }, [showAchievement]);

  return (
    <>
      <ScrollToTop />

      {showAchievement && (
        <AchievementPopup
          onClose={() => {
            setShowAchievement(false);
            localStorage.setItem("achievement_popup_closed", "true");
          }}
        />
      )}

      <Routes>
        {/* Public routes */}
        {getPublicRoutes()}
        {getPrivateRoutes()}
      </Routes>
    </>
  );
}
