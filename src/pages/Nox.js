import React, { useEffect } from "react";
import CaseStudyHero from "../components/CaseStudyHero";
import { scrollTop } from "../helpers";

const Nox = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="nox">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Nox"
        heading="Welcome to the Night"
        heading2="is the tag line for this holistic brand"
      />
      NOX
    </div>
  );
};

export default Nox;
