import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import LandingPage from "../pages/LandingPage";
import Eze from "../pages/Eze";
import Apems from "../pages/Apems";
import Zap from "../pages/zap";
import Xela from "../pages/Xela";
import UIUX from "../pages/UiPortfolio";

const AllRoutes = ({ setIssDarkMode, issDarkMode, loading }) => {
  const themeToggle = () => {
    setIssDarkMode(!issDarkMode);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout issDarkMode={issDarkMode} setIssDarkMode={setIssDarkMode}>
            {!loading && (
              <LandingPage
                themeToggle={themeToggle}
                issDarkMode={issDarkMode}
              />
            )}
          </PageLayout>
        }
      />
      <Route
        path="/eze"
        element={
          <PageLayout issDarkMode={issDarkMode} setIssDarkMode={setIssDarkMode}>
            <Eze themeToggle={themeToggle} issDarkMode={issDarkMode} />
          </PageLayout>
        }
      />

      <Route
        path="/ui-ux"
        element={
          <PageLayout issDarkMode={issDarkMode} setIssDarkMode={setIssDarkMode}>
            <UIUX themeToggle={themeToggle} issDarkMode={issDarkMode} />
          </PageLayout>
        }
      />
      <Route
        path="/apems"
        element={
          <PageLayout issDarkMode={issDarkMode} setIssDarkMode={setIssDarkMode}>
            <Apems themeToggle={themeToggle} issDarkMode={issDarkMode} />
          </PageLayout>
        }
      />
      <Route
        path="/xela"
        element={
          <PageLayout issDarkMode={issDarkMode} setIssDarkMode={setIssDarkMode}>
            <Xela themeToggle={themeToggle} issDarkMode={issDarkMode} />
          </PageLayout>
        }
      />
      <Route
        path="/zap"
        element={
          <PageLayout issDarkMode={issDarkMode} setIssDarkMode={setIssDarkMode}>
            <Zap themeToggle={themeToggle} issDarkMode={issDarkMode} />
          </PageLayout>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
