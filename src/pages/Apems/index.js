import React, { useEffect } from "react";
import CaseStudyHero from "../../components/CaseStudyHero";
import { scrollTop } from "../../helpers";
import apemsLogo from "../../assets/images/apemsLogo.webp";
import "./apems.scss";
import adminImg from "../../assets/images/apem admin.jpg";
import auditlog from "../../assets/images/auditlog.jpeg";
import election from "../../assets/images/votingSystem.jpeg";

const Apems = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="apems">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="APEMS"
        heading="Apems helps Create amazing virtual and hybrid events."
        url="https://africaprudential.com/"
        status="Development"
      />
      <div className="apems_wrap">
        <div className="logo">
          <img src={apemsLogo} alt="" />
        </div>
        <div>
          <h1>Company:</h1>
          <div>
            <p>
              Africa Prudential is Transforming Africa with innovative
              solutions.
            </p>
            <p>
              We are a leading Registrar, Investor Services and Business Support
              Solutions provider with close to five decades’ of top-class
              experience in the Nigerian Capital Market, and currently managing
              over 80 corporate clients.
            </p>
          </div>
        </div>
        <div>
          <h1>Role:</h1>
          <div>
            <h3>
              Frontend Engineer: <small> React JS - Javascript - SCSS</small>
            </h3>
            <p></p>
            <ul>
              <li>
                I convert Adobe design into User interface in a scalable and
                responsive pattern
              </li>
              <li>
                Integration of Api such as:
                <ul>
                  <li>Google Api</li>
                  <li>Custom Rest Api</li>
                  <li>Connect to Custom web socket channel using pusher</li>
                </ul>
              </li>
              <li>
                I also worked on making desktop only pages into mobile resposive
                pages.
              </li>
              <li>
                Worked on the voting system section such as election center and
                election report
              </li>
              <img src={election} alt="election" />
              <li>
                Add new features to web application such as:
                <ul>
                  <li>Election observer</li>
                  <li>Made fixes on the event management system</li>
                  <li>Testing and fixing bugs accross the platform </li>
                </ul>
              </li>
              <li>
                Build a content management system which is use to manage the
                Apems platform contents.
                <br />
                <p>Account Management Section</p>
                <p>Audit log section</p>
                <img src={auditlog} alt="apems2" />
                <p>Guest page section</p>
              </li>
              <img src={adminImg} alt="apems2" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apems;
