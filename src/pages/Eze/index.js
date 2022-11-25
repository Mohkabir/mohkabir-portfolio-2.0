import React, { useEffect } from "react";
import CaseStudyHero from "../../components/CaseStudyHero";
import { scrollTop } from "../../helpers";
import ezeLogo from "../../assets/images/ezelogo.png";
import "./eze.scss";

const Eze = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="eze">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Eze Wholesale"
        heading="B2B Wholesale Marketplace for Electronics."
        url="https://ezewholesale.com"
        status="Production"
      />
      <div className="eze_wrap">
        <div className="logo">
          <img src={ezeLogo} alt="" />
        </div>
        <div>
          <h1>Company:</h1>
          <div>
            <p>
              Eze is a B2B wholesale marketplace for smartphones, laptops,
              tablets, and other electronics with brands such as Apple, Samsung,
              Lenovo, HP, and more. Eze connects 1000’s of US based sellers to
              buyers all over the world.
            </p>
          </div>
        </div>
        <div>
          <h1>Role:</h1>
          <div>
            <h3>
              Frontend Engineer: <small>Next JS & React JS</small>
            </h3>
            <p></p>
            <ul>
              <li>Integration of Api</li>

              <li>
                I convert complex User Interface into maintainable, scalable and
                clean code. This includes The upgrade of Company Website from
                version one (v1) to version two (v2)
              </li>
              <li>
                Add new features to web application such as:
                <ul>
                  <li>The seller onboarding flow</li>
                  <li>Order management system admin section</li>
                  <li>Seller Dahboard and seller profile management</li>
                </ul>
              </li>
              <li>
                Create reuseable components using:
                <ul>
                  <li>Storybook</li>
                  <li>Custom hooks</li>
                  <li>Styled components</li>
                </ul>
              </li>
              <li>Testing and fixing bugs accross the platform </li>
              <li>Internationalization: Spanish and Portugal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eze;
