import React, { useState, useRef, useEffect } from "react";
import zap from "../assets/images/home-imgs/zap.png";
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

  const [activeBg, setActiveBg] = useState();

  const isInViewport01 = useIsInViewport(viewRef1);
  const isInViewport02 = useIsInViewport(viewRef2);
  const isInViewport03 = useIsInViewport(viewRef3);
  const isInViewport04 = useIsInViewport(viewRef4);
  const isInViewport05 = useIsInViewport(viewRef5);

  useEffect(() => {
    if (isInViewport01 === true) {
      setActiveBg(1);
    }
    if (isInViewport02 === true) {
      setActiveBg(2);
    }
    if (isInViewport03 === true) {
      setActiveBg(3);
    }
    if (isInViewport04 === true) {
      setActiveBg(4);
    }
    if (isInViewport05 === true) {
      setActiveBg(5);
    }
  }, [offsetY]);

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
          title="ZAP"
          text="The Official Website for ZAP Expression"
          url="/forric"
          bg={zap}
          viewRef={viewRef1}
          activeBg={activeBg}
        />
        <Section2Card
          idx={2}
          issDarkMode={issDarkMode}
          title="Portfolio"
          text="Portfolio for a Senior UI-UX Designer"
          url="/nox"
          bg={portfolioProject}
          viewRef={viewRef2}
          activeBg={activeBg}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="Compoundcapital"
          text="Deals financing platform for Africans powered by Syndicates."
          url="/compound-capital"
          bg={zap}
          viewRef={viewRef3}
          activeBg={activeBg}
          idx={3}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="Cubana group"
          text="Palatial ecstatic hospitality brand"
          url="/cubana-group"
          bg={zap}
          viewRef={viewRef4}
          activeBg={activeBg}
          idx={4}
        />
        <Section2Card
          issDarkMode={issDarkMode}
          title="Luxistt"
          text="Serenity away from home in apartments"
          url="/luxistt"
          bg={zap}
          viewRef={viewRef5}
          activeBg={activeBg}
          idx={5}
        />
      </div>
    </div>
  );
};

export default Section2;
