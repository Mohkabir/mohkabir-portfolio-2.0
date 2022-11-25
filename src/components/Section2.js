import React, { useState, useRef, useEffect } from "react";
import zap from "../assets/images/home-imgs/zap.png";
import eze from "../assets/images/home-imgs/eze.png";

import portfolioProject from "../assets/images/home-imgs/ui-ux-portfolio.png";
import apems from "../assets/images/apem2 2.jpg";
import xelaImg from "../assets/images/xelaImg.png";
import { useIsInViewport } from "../helpers/index";
import Section2Card from "./Section2Card";

const Section2 = ({
  issDarkMode,
  offsetY,
  check,
  beforeStickyRef,
  containerRef,
}) => {
  const isInViewport1 = useIsInViewport(check);
  const scrollRef = useRef();
  const viewRef1 = useRef();
  const viewRef2 = useRef();
  const viewRef3 = useRef();
  const viewRef4 = useRef();
  const viewRef5 = useRef();

  // const isInViewport01 = useIsInViewport(viewRef1);
  // const isInViewport02 = useIsInViewport(viewRef2);
  // const isInViewport03 = useIsInViewport(viewRef3);
  // const isInViewport04 = useIsInViewport(viewRef4);
  // const isInViewport05 = useIsInViewport(viewRef5);

  useEffect(() => {
    if (isInViewport1 === true) {
      let xAxisToScroll = offsetY - containerRef.current.offsetTop - 350;
      scrollRef.current.scrollLeft = xAxisToScroll;
    }
  }, [offsetY]);

  return (
    <div className="section2 sticky" ref={scrollRef}>
      <div ref={beforeStickyRef} className="card_wrapper">
        <Section2Card
          idx={1}
          issDarkMode={issDarkMode}
          title="EZE"
          text="B2B Wholesale Marketplace for Electronics."
          url="/eze"
          bg={eze}
          viewRef={viewRef1}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="APEMS"
          text="Event Management System and Voting System"
          url="/apems"
          bg={apems}
          viewRef={viewRef3}
          idx={2}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="ZAP expression"
          text="Provide tech solutions and services "
          url="/zap"
          bg={zap}
          viewRef={viewRef4}
          idx={3}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="Xela"
          text="Securely buy, share and sell ideas"
          url="/xela"
          bg={xelaImg}
          viewRef={viewRef5}
          idx={4}
        />
        <Section2Card
          idx={5}
          issDarkMode={issDarkMode}
          title="Portfolio"
          text="Portfolio for a Senior UI-UX Designer"
          url="/ui-ux"
          bg={portfolioProject}
          viewRef={viewRef2}
        />
      </div>
    </div>
  );
};

export default Section2;
