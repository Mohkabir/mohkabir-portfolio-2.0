import React, { useState, useEffect, useRef, useMemo } from "react";
import { useForm } from "@formspree/react";
import Hero from "../components/Hero";
import { Checked, ShortArrowRight } from "../components/Icons";
// import OurTeam from "../components/OurTeam";
import Section2 from "../components/Section2";
import singleImage1 from "../assets/images/singleImage1.png";
import "../scss/landing.scss";
import {
  calculateHeight,
  CheckDeviceScreen,
  useIsInViewport,
  useScrollDirection,
} from "../helpers";
import About from "../components/About";
import SkillSet from "../components/SkillSet";

const CaseOne = ({ themeToggle, issDarkMode }) => {
  const formKey = "xvoykerw";
  const [state, handleSubmit] = useForm(formKey);

  const check = useRef(null);
  const check2 = useRef(null);
  const check3 = useRef(null);
  const beforeStickyRef = useRef(null);
  const beforeStickyRef2 = useRef(null);
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const singleImgRef = useRef(null);
  const aboutRef = useRef();

  const [offsetY, setOffsetY] = useState(0);

  // const defaultWidth = 65;
  const defaultWidth = 800;

  const [imgWidth, setimgWidth] = useState(defaultWidth);
  const [offsetYAfterView, setOffsetYAfterView] = useState(0);

  const scrollDirection = useScrollDirection();
  const isInViewport1 = useIsInViewport(check3);
  const screen = CheckDeviceScreen();

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    if (isInViewport1 === true) {
      const newwidth = offsetY - singleImgRef.current.offsetTop;
      setimgWidth(newwidth + defaultWidth + 400);
    }
  }, [offsetY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Hero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        aboutRef={aboutRef}
      />
      <About aboutRef={aboutRef} />
      <h1 className="wrapper" id="work" style={{ textAlign: "center" }}>
        Work
      </h1>

      <div
        className="beforeSticky mobile"
        style={{
          height: "initial",
        }}
        ref={containerRef}
      >
        <div className="sticky">
          <Section2
            offsetY={offsetY}
            issDarkMode={issDarkMode}
            check={check}
            beforeStickyRef={beforeStickyRef}
            containerRef={containerRef}
          />
          <div ref={check}></div>
        </div>
      </div>
      <div
        className="beforeSticky desktop"
        style={{
          height: calculateHeight(beforeStickyRef, 350),
        }}
        ref={containerRef}
      >
        <div className="sticky">
          <Section2
            offsetY={offsetY}
            issDarkMode={issDarkMode}
            check={check}
            beforeStickyRef={beforeStickyRef}
            containerRef={containerRef}
          />
          <div ref={check}></div>
        </div>
      </div>
      <SkillSet />

      <div className="wrapper singleImage" ref={singleImgRef}>
        <div ref={check3} className="viewPort"></div>
        {/* <img
          src={singleImage1}
          alt=""
          style={{ width: screen === "desktop" ? `${imgWidth}px` : "100%" }}
        /> */}
      </div>
    </div>
  );
};

export default CaseOne;
