import React, { useEffect } from "react";
import CaseStudyHero from "../components/CaseStudyHero";
import { scrollTop } from "../helpers";

const Nox = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div>
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        url="https://www.kingsleyukeje.com/"
        title="UI UX Portfolio"
        heading="A professional portfolio for a senior UI-UX Designer"
        status="Production"
        // heading2="is the tag line for this holistic brand"
      />
      <div className="eze_wrap">
        <div className="logo">{/* <ZapLogo /> */}</div>
        <div>
          <h1>Profile:</h1>
          <div>
            <p>
              kingsley have been designing UX for 6+ years now, helping
              companies enhance their design experiences, refine their ideas and
              launch impactful solutions.
            </p>
          </div>
        </div>
        <div>
          <h1>Role:</h1>
          <div>
            <h3>
              Frontend Engineer: <small>React JS - SCSS - CSS</small>
            </h3>
            <ul>
              <li>
                I develop kingsley website using React JS, SCSS and CSS. <br />
                All styles and animations are custom made as no external package
                was used.
              </li>
              <li>Testing and bug fix</li>
              <span className="view_link">
                <a
                  href="https://www.kingsleyukeje.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Site
                </a>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nox;
