import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckDeviceScreen } from "../helpers";

const Section2Card = ({
  idx,
  issDarkMode,
  title,
  text,
  url,
  bg,
  viewRef,
  activeBg,
}) => {
  const [hover, sethover] = useState(false);

  const screen = CheckDeviceScreen();

  const toggleHover = (val) => {
    sethover(val);
  };

  return (
    <div
      key={idx}
      className={`card ${!issDarkMode && "light_mode"} ${
        screen === "mobile" && activeBg === idx && "light_mode_hover"
      }`}
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div className="thumb_img"></div>
      <div
        style={{ borderColor: issDarkMode ? "white" : "black" }}
        className="beforeWrap"
      >
        <div className="wrap">
          {/* <h3 className={` ${idx === 2 && "nox"}`}>{title}</h3> */}
          <div className="img_wrap">
            <img src={bg} alt="" />
              <Link to={url}></Link>
          </div>

          <p>{text}</p>
          <Link to={url}>
            View Project
          </Link>
        </div>

        <div ref={viewRef}></div>
      </div>
    </div>
  );
};

export default Section2Card;
