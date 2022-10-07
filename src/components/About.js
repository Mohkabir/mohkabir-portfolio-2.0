import React from "react";

const About = ({ aboutRef }) => {
  return (
    <div className="wrapper">
      About
      <p>
        I am passionate about helping companies enhance their design
        experiences, refine their ideas and launch impactful solutions. In the
        past, I have helped companies with millions of customers grow their
        businesses, improve and create products by identifying product and user
        experience problems and opportunities, conceptualizing, prototyping, and
        working with developers (handoff).
      </p>
      <span ref={aboutRef}></span>
    </div>
  );
};

export default About;
