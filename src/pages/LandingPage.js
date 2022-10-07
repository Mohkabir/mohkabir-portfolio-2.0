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

      {/* <div className="section1">
        <h2>
          We work close with our clients and help them find their natural voice
          through strong visual communication - working from the big ambition to
          the smallest <span className="primary_text">design</span> detail.
        </h2>
      </div> */}
      <SkillSet />

      <div className="wrapper singleImage" ref={singleImgRef}>
        <div ref={check3} className="viewPort"></div>
        <img
          src={singleImage1}
          alt=""
          style={{ width: screen === "desktop" ? `${imgWidth}px` : "100%" }}
        />
      </div>
      <div className="section7 wrapper">
        <h2>Get in touch</h2>

        <p className="alert" style={{ color: "red" }}>
          {!state.submitting && state?.errors?.length
            ? "Error: Please Try again"
            : ""}
        </p>
        <p className="alert" style={{ color: "#FDBB06" }}>
          {!state.submitting && state?.succeeded ? "Submited Successfully" : ""}
        </p>
        <form
          onSubmit={handleSubmit}
          className={`${issDarkMode ? "inputDark" : "inputLight"}`}
        >
          {/* <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
          /> */}
          <textarea name="" id="" cols="10" rows="5"></textarea>
          <button
            className={`submit ${state.submitting && "loader"}`}
            type="submit"
          >
            {/* {!state.submitting && state?.succeeded ? (
              <Checked />
            ) : (
              <ShortArrowRight color={issDarkMode ? "white" : "black"} />
            )} */}
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CaseOne;
