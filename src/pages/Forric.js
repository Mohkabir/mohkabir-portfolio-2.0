import React, { useEffect } from "react";
import CaseStudyHero from "../components/CaseStudyHero";
import { scrollTop } from "../helpers";

const Forric = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="forrics">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Forric"
        heading="High quality ICT solutions you can trust"
      />
      ZAP
    </div>
  );
};

export default Forric;
