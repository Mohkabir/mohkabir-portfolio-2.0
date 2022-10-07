import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import LandingPage from "../pages/LandingPage";
import Nox from "../pages/Nox";
import Forric from "../pages/Forric";

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
        path="/nox"
        element={
          <PageLayout
            issDarkMode={issDarkMode}
            setIssDarkMode={setIssDarkMode}
            footerColour={{
              background: "black",
              color: "white",
            }}
          >
            <Nox themeToggle={themeToggle} issDarkMode={issDarkMode} />
          </PageLayout>
        }
      />
      <Route
        path="/forric"
        element={
          <PageLayout
            issDarkMode={issDarkMode}
            setIssDarkMode={setIssDarkMode}
            footerColour={{
              background: "white",
              color: "black",
            }}
          >
            <Forric themeToggle={themeToggle} issDarkMode={issDarkMode} />
          </PageLayout>
        }
      />

    </Routes>
  );
};

export default AllRoutes;
