import React from "react";

const About = ({ aboutRef }) => {
  return (
    <div className="wrapper about">
      <h1>About</h1>
      <p>
        A Fullstack Engineer with core knowledge in Front-end development <br />
        {/* My problem-solving starts with a clear and accurate understanding of the
        context. I can decompose tricky problems and work towards a clean
        solution, by myself or with teammates. */}
      </p>

      <p>
        I care about business impact and prioritize projects accordingly. <br />{" "}
        I am not just going after cool stuff, but also understand the balance
        between craft, speed, and the bottom line.
      </p>
      <p>
        I think critically about the implications of what I am building, and how
        it shapes people's lives.
      </p>
      <p>
        I can translate high-level designs into production-ready UI. I am
        comfortable making judgment calls on tradeoffs and edge cases in the
        user experience on my own and actively partner with designers to figure
        out the details when the requirements are unclear.
      </p>
      <p>
        I enjoy collaborating cross-functionally to accomplish shared goals, and
        i care about learning, growing, and helping others to do the same.
      </p>
      <span ref={aboutRef}></span>
    </div>
  );
};

export default About;
