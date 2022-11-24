import React, { useState, useRef, useEffect } from "react";
import zap from "../assets/images/home-imgs/zap.png";
import eze from "../assets/images/home-imgs/eze.png";

import portfolioProject from "../assets/images/home-imgs/ui-ux-portfolio.png";

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
          idx={2}
          issDarkMode={issDarkMode}
          title="Portfolio"
          text="Portfolio for a Senior UI-UX Designer"
          url="/nox"
          bg={portfolioProject}
          viewRef={viewRef2}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="ZAP"
          text="The Official Website for ZAP Expression"
          url="/compound-capital"
          bg={zap}
          viewRef={viewRef3}
          idx={3}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="Cubana group"
          text="Palatial ecstatic hospitality brand"
          url="/cubana-group"
          bg={zap}
          viewRef={viewRef4}
          idx={4}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="Luxistt"
          text="Serenity away from home in apartments"
          url="/luxistt"
          bg={zap}
          viewRef={viewRef5}
          idx={5}
        />
      </div>
    </div>
  );
};

export default Section2;
