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
        url="https://www.kingsleyukeje.com/"
        title="UI UX Portfolio"
        heading="This is a Professional portfolio for a senior UI-UX Designer"
        // heading2="is the tag line for this holistic brand"
      />
      UI UX Portfolio
    </div>
  );
};

export default Nox;
