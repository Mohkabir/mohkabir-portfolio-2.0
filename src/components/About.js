import React from "react";

const About = ({ aboutRef }) => {
  return (
    <div className="wrapper about">
      <h1>About</h1>
      <p>
        I am passionate about helping companies move thier product forward, solving problems with tech solutions.
      </p>
      <p>
        In the past, I have helped companies with millions of customers grow
        their businesses, improve and create products by identifying product and
        user experience problems and opportunities, conceptualizing,
        prototyping, and working with developers (handoff).
      </p>
      <span ref={aboutRef}></span>
    </div>
  );
};

export default About;
