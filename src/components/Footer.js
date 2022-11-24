import React from "react";
import { Logo } from "./Icons";
import { Link } from "react-router-dom";
const Footer = ({ issDarkMode, footerColour }) => {
  const moreStyle = {
    ...footerColour,
    borderColor: footerColour?.color,
  };
  return (
    <div className="footer" style={footerColour && moreStyle}>
      <footer className="wrapper">
        <div>
          <Link to="/">
            <Logo color={issDarkMode ? "white" : "black"} />
          </Link>
        </div>
        <div>
          <p>
            <a className="tel" href="tel:+2348135123864">
              +2348135123864
            </a>
          </p>
          <p>
            <a href="mailto:kabirmohammed586686@gmail.com">
              kabirmohammed586686@gmail.com
            </a>
          </p>

          {/* <a onClick={downloadCV} style={{ cursor: "pointer" }}>
            Download Resume
          </a> */}
          {/* <p>‎+234 916 414 7181</p> */}
        </div>
        <div className={`${issDarkMode ? "darkLink" : "lightLink"}`}>
          {/* <a
            target="_blank"
            href="https://www.instagram.com/zap_expression/"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Instagram
          </a> */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kabir-mohammed-155997214/"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mohkabir"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://twitter.com/Kbshowkb1"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Twitter
          </a>
        </div>
        <div>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
