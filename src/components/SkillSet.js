import React, { useState } from "react";

const SkillSet = () => {
  const [currentTab, setcurrentTab] = useState(1);
  const changeTab = (val) => {
    setcurrentTab(val);
  };
  return (
    <div className="wrapper">
      <h1>Tools</h1>

      <ul className="tabs">
        <li
          className={`${currentTab === 1 && "active"}`}
          onClick={() => changeTab(1)}
        >
          Frontend
        </li>
        <li
          className={`${currentTab === 2 && "active"}`}
          onClick={() => changeTab(2)}
        >
          Backend
        </li>
        <li
          className={`${currentTab === 3 && "active"}`}
          onClick={() => changeTab(3)}
        >
          Ui Ux
        </li>
      </ul>

      {currentTab === 1 && (
        <div className="tabContents">
          <span>React JS</span>
          <span>Next JS</span>
          <span>Javascript</span>
          <span>Typescript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>SCSS</span>
          <span>Tailwind css</span>
          <span>Material UI</span>
          <span>Ant Design</span>
          <span>Storybook</span>
          <span>WIX</span>
        </div>
      )}

      {currentTab === 2 && (
        <div className="tabContents">
          <span>Node JS</span>
          <span>Express JS</span>
          <span>Typescript</span>
          <span>Mongo DB</span>
          <span>Sql</span>
        </div>
      )}
      {currentTab === 3 && (
        <div className="tabContents">
          <span>Figma</span>
        </div>
      )}

      {/* <h2>
        We work close with our clients and help them find their natural voice
        through strong visual communication - working from the big ambition to
        the smallest <span className="primary_text">design</span> detail.
      </h2> */}
    </div>
  );
};

export default SkillSet;
