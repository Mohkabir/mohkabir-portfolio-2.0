import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Icons";
import "./caseStudyHero.scss";
const CaseStudyHero = ({
  themeToggle,
  issDarkMode,
  title,
  heading,
  heading2,
  bg,
  color,
  url,
}) => {
  const dark = {
    borderColor: "white",
    color: "white",
    justifyContent: "flex-start",
  };
  const light = {
    borderColor: "black",
    color: "black",
    justifyContent: "flex-end",
  };
  return (
    <div
      className="caseStudyHero"
      style={{
        background: bg && bg,
        color: color && color,
      }}
    >
      <div className="head wrapper">
        <Link to="/">
          <Logo color={color ? "black" : issDarkMode ? "white" : "black"} />
        </Link>
      </div>
      <div className="hero_contents case_hero_contents">
        <div className="wrap_text">
          <span>
            <a
              style={{ color: "white" }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title} - web
            </a>
          </span>
          <h1>
            {heading} <span style={{ color: "#292929" }}>{heading2}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
