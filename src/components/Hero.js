import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Icons";
import { ColorChanger } from "./Icons";

const Hero = ({ themeToggle, issDarkMode, aboutRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000000");

  const handleColorSelect = (color) => {
    setCurrentColor(color);
    setIsVisible(false);
  };

  const scrollTop = (val) => {
    window.scrollTo({
      bottom: val,
      behaviour: "smooth",
    });
  };

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

  const toggleColorPicker = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="hero">
      <div className="head wrapper">
        <Link to="/">
          <Logo color={issDarkMode ? "white" : "black"} />
        </Link>
        {/* <div
          className="darkToggle"
          style={issDarkMode ? dark : light}
          onClick={themeToggle}
        >
          <span style={{ background: issDarkMode ? "white" : "black" }}></span>
        </div> */}
        <div className="multiToggle">
          <span onClick={toggleColorPicker}>
            <ColorChanger color={currentColor} />
          </span>
          <ul className={` ${isVisible ? "viewColor" : "hideColor"}`}>
            <li onClick={() => handleColorSelect("#ffffff")}></li>
            <li onClick={() => handleColorSelect("#000000")}></li>
            <li onClick={() => handleColorSelect("#937426")}></li>
            <li onClick={() => handleColorSelect("#131262")}></li>
          </ul>
        </div>
      </div>

      <div className="hero_contents">
        <div className="wrap_text">
          <h1>
            I am <span className="primary_text">Mohammed Kabir</span>{" "}
            Frontend-engineer
          </h1>
          <p>
            <span>
              I build software solutions using React and Node JS, putting in
              mind the trade offs between code readability, time complexity and
              space complexity.
            </span>
          </p>
          <div
            className="PrimaryBtn2"
            // onClick={() => scrollTop(aboutRef.current.offsetTop)}
          >
            <span>
              <a href="#work">View My Work</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
