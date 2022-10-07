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
          {/* <span>
            31 Old airport road by <br /> Thinkers Corner Emene <br />{" "}
            Industrial Layout, <br /> Thinkers Corner, Enugu
          </span> */}
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
          <a
            target="_blank"
            href="https://www.instagram.com/zap_expression/"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/zap-expression/"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/zapexpression?_rdc=1&_rdr"
            style={{ color: footerColour?.color && footerColour.color }}
          >
            Facebook
          </a>
          <a
            target="_blank"
            href="https://twitter.com/ZapExpression"
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
