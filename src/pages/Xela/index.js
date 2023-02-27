import React, { useEffect } from "react";
import CaseStudyHero from "../../components/CaseStudyHero";
import { scrollTop } from "../../helpers";
import ezeLogo from "../../assets/images/ezelogo.png";

import "./xela.scss";

const Xela = ({ themeToggle, issDarkMode }) => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="">
      <CaseStudyHero
        themeToggle={themeToggle}
        issDarkMode={issDarkMode}
        title="Xela App"
        heading="Xela is a platform you can securely buy, share and sell ideas."
        url="https://zap-seven.vercel.app/"
        status="development"
      />
      <div className="eze_wrap">
        {/* <div className="logo">
          <ZapLogo />
        </div> */}
        <div>
          <h1>Project:</h1>
          <div>
            <p>
              Xela is a platform you can securely buy, share and sell ideas
              Leveraging the power of all to bring your ideas to life.
            </p>
          </div>
        </div>
        <div>
          <h1>Role:</h1>
          <div>
            <h3>
              Frontend Engineer: <small>React JS - Bootstrap - CSS</small>
            </h3>
            <ul>
              <li>I converted Figma design into user experience</li>
              <li>Testing and bug fix</li>
              <li>Integrated Rest Api</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ZapLogo = () => (
  <svg
    width="85"
    height="70"
    viewBox="0 0 85 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.2719 14.3799C26.942 14.3799 14.4619 26.86 14.4619 42.1899C14.4619 57.5198 26.942 69.9999 42.2719 69.9999C57.6018 69.9999 70.0819 57.5198 70.0819 42.1899C70.0819 26.86 57.6182 14.3799 42.2719 14.3799ZM61.9912 25.517H58.3061L60.3042 23.7154C60.8938 24.2723 61.4671 24.8782 61.9912 25.517ZM57.1596 63.3013V36.6541H53.8676L46.5957 43.5001L53.0323 43.5493L27.4661 63.3504C27.4006 63.3013 27.3351 63.2685 27.286 63.2194L38.8325 48.7575H33.9846L42.9598 36.6541H20.9149V56.7173C18.0815 52.5736 16.4273 47.5783 16.4273 42.1899C16.4273 27.941 28.023 16.3453 42.2719 16.3453C46.5139 16.3453 50.5429 17.3771 54.0805 19.195L45.5475 30.8563H50.33L37.8498 46.6939L63.1049 26.9091C66.2495 31.1838 68.1166 36.4739 68.1166 42.1899C68.1166 50.903 63.7928 58.6171 57.1596 63.3013Z"
      fill="white"
    ></path>
    <path
      d="M8.59856 56.2916L2.91536 54.0806L4.11096 57.6674L2.99725 58.0441L1.3103 52.9996L2.26023 52.6884L7.91068 54.7685L6.71508 51.1653L7.82879 50.7886L9.54849 55.9641L8.59856 56.2916Z"
      fill="white"
    ></path>
    <path
      d="M6.94432 45.8424L0.0163791 43.2383L0 42.1574L6.84605 39.3403L6.86243 40.7488L5.1591 41.404L5.19186 43.8116L6.91156 44.4175L6.94432 45.8424ZM1.45765 42.6651L4.25831 43.615L4.22555 41.666L1.45765 42.6651Z"
      fill="white"
    ></path>
    <path
      d="M7.77955 33.9517L1.19556 31.9208L2.04722 29.1365C2.14549 28.8417 2.29289 28.5797 2.48943 28.3504C2.70234 28.1375 2.93163 27.9573 3.19368 27.8426C3.45573 27.728 3.73416 27.6461 4.02897 27.6297C4.32377 27.6134 4.6022 27.6297 4.86425 27.7116C5.14268 27.7935 5.40473 27.9245 5.63402 28.1047C5.86332 28.2849 6.05985 28.4978 6.20726 28.7434C6.35466 28.9891 6.45293 29.2512 6.50206 29.546C6.55119 29.8408 6.51844 30.1356 6.43655 30.4304L5.96158 31.9863L8.17263 32.6742L7.77955 33.9517ZM4.84787 31.6424L5.30646 30.152C5.37197 29.9227 5.33922 29.6934 5.20819 29.4805C5.06079 29.2675 4.83149 29.1038 4.50393 29.0055C4.34015 28.9564 4.17637 28.94 4.02897 28.94C3.88157 28.9564 3.75054 28.9727 3.63589 29.0382C3.52125 29.0874 3.42298 29.1693 3.34109 29.2512C3.2592 29.3494 3.21006 29.4477 3.17731 29.5623L2.7351 30.9872L4.84787 31.6424Z"
      fill="white"
    ></path>
    <path
      d="M18.5399 14.2817L19.3588 15.117L15.9358 18.4581L11.1206 13.5447L14.4781 10.269L15.297 11.1043L12.9058 13.4464L14.0687 14.6256L16.1323 12.5947L16.8857 13.3645L14.8221 15.3954L16.0832 16.6729L18.5399 14.2817Z"
      fill="white"
    ></path>
    <path
      d="M21.5536 5.30675L24.2396 6.81353L24.6 3.75083L25.8938 3.0957L25.3042 7.32125L28.9565 9.27025L27.6627 9.92537L25.0913 8.46772L24.7474 11.3994L23.4535 12.0545L24.0267 7.96L20.2598 5.96187L21.5536 5.30675Z"
      fill="white"
    ></path>
    <path
      d="M34.1811 7.66475L33.051 0.867837L35.9336 0.392872C36.2448 0.343738 36.5396 0.360117 36.8344 0.442007C37.1128 0.523898 37.3748 0.6713 37.6041 0.85146C37.8334 1.03162 38.0136 1.24453 38.1774 1.50658C38.3248 1.75226 38.423 2.03068 38.4722 2.29273C38.5213 2.58754 38.5213 2.86597 38.4558 3.16077C38.4067 3.45558 38.292 3.71763 38.1446 3.94692C37.9972 4.19259 37.8007 4.38913 37.555 4.56929C37.3093 4.73307 37.0309 4.84772 36.7197 4.89685L35.1147 5.1589L35.4914 7.43546L34.1811 7.66475ZM34.9345 4.01243L36.4577 3.76676C36.7033 3.734 36.8835 3.5866 37.0145 3.37369C37.1456 3.14439 37.1783 2.86597 37.1292 2.52203C37.0964 2.34187 37.0473 2.19446 36.9818 2.06344C36.8999 1.93241 36.818 1.83415 36.7197 1.75226C36.6215 1.67036 36.5068 1.62123 36.3922 1.58847C36.2775 1.55572 36.1629 1.55572 36.0482 1.57209L34.5742 1.81777L34.9345 4.01243Z"
      fill="white"
    ></path>
    <path
      d="M44.8596 6.81329L45.8423 0L48.8559 0.442209C49.1671 0.491344 49.4455 0.589612 49.6912 0.769771C49.9368 0.933552 50.1334 1.14647 50.2971 1.39214C50.4609 1.63781 50.5756 1.89986 50.6411 2.19467C50.7066 2.48947 50.723 2.7679 50.6902 3.04633C50.6247 3.48854 50.4609 3.86523 50.1825 4.20917C49.9041 4.53673 49.5765 4.74965 49.1671 4.8643L50.3954 7.66495L48.905 7.45204L47.8077 4.96256L46.4974 4.76603L46.1699 7.04258L44.8596 6.81329ZM46.6776 3.55405L48.3318 3.79972C48.4464 3.8161 48.5774 3.79972 48.6921 3.76696C48.8067 3.71783 48.905 3.65232 49.0033 3.57043C49.1015 3.48854 49.1671 3.37389 49.2326 3.24286C49.2981 3.11184 49.3472 2.98081 49.3636 2.81703C49.38 2.65325 49.38 2.50585 49.3472 2.35845C49.3145 2.21104 49.2653 2.0964 49.1834 1.98175C49.1179 1.8671 49.0197 1.78521 48.9214 1.70332C48.8231 1.63781 48.7085 1.58868 48.5938 1.5723L46.9888 1.343L46.6776 3.55405Z"
      fill="white"
    ></path>
    <path
      d="M60.5662 10.433L60.0585 11.4812L55.7675 9.38477L58.781 3.19385L63.0066 5.24111L62.4989 6.28931L59.4853 4.81528L58.7646 6.30569L61.3688 7.5668L60.8938 8.54949L58.2897 7.28837L57.5035 8.89343L60.5662 10.433Z"
      fill="white"
    ></path>
    <path
      d="M71.1956 13.8396C71.1956 13.7741 71.1792 13.6758 71.1465 13.5284C71.1137 13.3974 71.0646 13.2336 70.9827 13.0698C70.9008 12.9061 70.8189 12.7259 70.7043 12.5457C70.5896 12.3656 70.4586 12.2182 70.3112 12.0708C70.0492 11.8251 69.7871 11.6777 69.5742 11.6613C69.3449 11.645 69.1484 11.7105 68.9846 11.8906C68.8863 11.9889 68.8372 12.1035 68.8208 12.2182C68.8044 12.3328 68.8208 12.4639 68.8699 12.5949C68.9191 12.7423 68.9846 12.8897 69.0992 13.0698C69.1975 13.25 69.3285 13.4465 69.4759 13.6758C69.6561 13.9706 69.8199 14.2491 69.9509 14.5111C70.0819 14.7732 70.1638 15.0352 70.1966 15.2645C70.2293 15.5102 70.2129 15.7395 70.1474 15.9688C70.0819 16.1981 69.9345 16.4274 69.7216 16.6567C69.4759 16.9187 69.1975 17.1152 68.9191 17.2135C68.6406 17.3118 68.3622 17.3445 68.0838 17.2954C67.8054 17.2626 67.5269 17.1644 67.2485 17.0006C66.9701 16.8368 66.708 16.6566 66.4624 16.4274C66.0857 16.067 65.7581 15.674 65.496 15.2154C65.234 14.7568 65.0538 14.2818 64.9556 13.8069L66.1675 13.3647C66.1675 13.4465 66.2003 13.5776 66.2494 13.7413C66.2986 13.9215 66.3641 14.1017 66.446 14.3146C66.5279 14.5275 66.6425 14.7404 66.7899 14.9533C66.9373 15.1662 67.1011 15.3792 67.2976 15.5593C67.8381 16.067 68.2639 16.1326 68.5915 15.7886C68.6898 15.674 68.7553 15.5593 68.7717 15.4119C68.788 15.2809 68.7553 15.1335 68.6898 14.9697C68.6243 14.8059 68.5424 14.6258 68.4277 14.4292C68.3131 14.2327 68.1821 14.0198 68.0346 13.7741C67.8545 13.4793 67.7071 13.2172 67.6088 12.9716C67.5106 12.7259 67.445 12.4966 67.4123 12.2837C67.3959 12.0708 67.4123 11.8579 67.4942 11.6613C67.5597 11.4648 67.6907 11.2683 67.8709 11.0717C68.1165 10.8097 68.3622 10.6295 68.6406 10.5149C68.9191 10.4002 69.2139 10.3675 69.4923 10.3838C69.7871 10.4002 70.0655 10.4821 70.3603 10.6295C70.6388 10.7605 70.9172 10.9571 71.1792 11.1864C71.5396 11.5139 71.8016 11.8742 71.9981 12.2673C72.1947 12.6604 72.3257 13.0371 72.4076 13.381L71.1956 13.8396Z"
      fill="white"
    ></path>
    <path
      d="M78.3201 23.6992C78.3364 23.6337 78.3528 23.5354 78.3528 23.388C78.3528 23.2406 78.3528 23.0769 78.3364 22.8967C78.3201 22.7165 78.2709 22.52 78.2218 22.3235C78.1727 22.1269 78.0908 21.9304 77.9925 21.7502C77.8123 21.4227 77.6158 21.2261 77.4029 21.1442C77.19 21.0623 76.9771 21.0787 76.7641 21.1934C76.6331 21.2589 76.5512 21.3572 76.5021 21.4554C76.453 21.5537 76.4366 21.6847 76.4366 21.8321C76.4366 21.9795 76.4693 22.1597 76.5185 22.3562C76.5676 22.5528 76.6331 22.7821 76.6986 23.0441C76.7805 23.388 76.8624 23.6992 76.8952 23.9777C76.9443 24.2725 76.9443 24.5345 76.9115 24.7802C76.8788 25.0258 76.7805 25.2388 76.6495 25.4353C76.5185 25.6318 76.3056 25.812 76.0271 25.9758C75.6996 26.1559 75.4048 26.2542 75.11 26.2706C74.8151 26.287 74.5367 26.2215 74.2747 26.1068C74.0126 25.9922 73.7833 25.812 73.5704 25.5827C73.3575 25.3534 73.161 25.0914 72.9972 24.7966C72.7351 24.3543 72.555 23.863 72.4403 23.3553C72.3257 22.8476 72.2929 22.3398 72.3421 21.8485L73.6359 21.783C73.6195 21.8649 73.6032 21.9959 73.5868 22.1761C73.5868 22.3562 73.5868 22.5528 73.6032 22.782C73.6195 23.0113 73.6687 23.2406 73.7342 23.5027C73.7997 23.7484 73.898 23.994 74.029 24.2233C74.3893 24.8621 74.7824 25.0586 75.1918 24.8293C75.3229 24.7474 75.4211 24.6492 75.4703 24.5345C75.5194 24.4035 75.5358 24.2561 75.5194 24.0923C75.503 23.9121 75.4703 23.7156 75.4211 23.5027C75.372 23.2734 75.3065 23.0277 75.2246 22.7657C75.1427 22.4381 75.0772 22.1433 75.0608 21.8813C75.0281 21.6192 75.0444 21.3735 75.0772 21.177C75.1263 20.9641 75.2082 20.7839 75.3392 20.6038C75.4703 20.44 75.6504 20.2926 75.8797 20.1616C76.1745 19.9814 76.4857 19.8831 76.7805 19.8667C77.0753 19.8504 77.3701 19.8831 77.6322 19.9978C77.9106 20.1124 78.1563 20.2762 78.3856 20.4891C78.6149 20.702 78.8278 20.9641 78.9916 21.2753C79.2372 21.7011 79.3846 22.1269 79.4665 22.5528C79.532 22.9786 79.5648 23.3717 79.532 23.7484L78.3201 23.6992Z"
      fill="white"
    ></path>
    <path
      d="M76.2892 32.3958L82.9387 30.627L83.2826 31.9208L76.6331 33.6897L76.2892 32.3958Z"
      fill="white"
    ></path>
    <path
      d="M77.6158 42.6322C77.6158 42.1409 77.7305 41.6987 77.927 41.3056C78.1235 40.9125 78.402 40.5686 78.7295 40.2901C79.0571 40.0117 79.4338 39.7988 79.8596 39.6514C80.2854 39.504 80.7113 39.4385 81.1535 39.4385C81.6121 39.4385 82.0543 39.5367 82.4637 39.7005C82.8732 39.8643 83.2499 40.11 83.5611 40.4048C83.8723 40.6996 84.1343 41.0599 84.3145 41.453C84.4946 41.8624 84.5929 42.2883 84.5765 42.7632C84.5765 43.2546 84.4619 43.6968 84.2489 44.0899C84.036 44.4829 83.774 44.8269 83.43 45.1053C83.1025 45.3837 82.7094 45.5966 82.3 45.744C81.8741 45.8914 81.4483 45.957 81.0225 45.957C80.5639 45.957 80.1217 45.8587 79.7122 45.6949C79.3028 45.5311 78.9261 45.2855 78.6149 44.9907C78.3037 44.6958 78.058 44.3519 77.8615 43.9425C77.6813 43.5494 77.5994 43.1072 77.6158 42.6322ZM81.1207 40.7815C80.8259 40.7815 80.5311 40.8142 80.2527 40.8961C79.9743 40.978 79.7286 41.0927 79.5157 41.2564C79.3028 41.4202 79.1226 41.6168 78.9916 41.8461C78.8606 42.0754 78.795 42.3538 78.7787 42.665C78.7787 42.9761 78.8278 43.2546 78.9588 43.4839C79.0898 43.7295 79.2536 43.9261 79.4829 44.0899C79.6958 44.2536 79.9415 44.3847 80.2199 44.4666C80.4984 44.5484 80.7768 44.5976 81.0552 44.614C81.35 44.614 81.6448 44.5812 81.9233 44.4993C82.2017 44.4174 82.4474 44.2864 82.6603 44.1226C82.8732 43.9588 83.0533 43.7623 83.1844 43.533C83.3154 43.3037 83.3809 43.0253 83.3809 42.7305C83.3809 42.4193 83.3318 42.1409 83.2008 41.9116C83.0697 41.6659 82.9059 41.4694 82.693 41.3056C82.4801 41.1418 82.2344 41.0108 81.956 40.9125C81.694 40.8306 81.4155 40.7979 81.1207 40.7815Z"
      fill="white"
    ></path>
    <path
      d="M80.22 54.3097L76.0763 52.7865L76.5349 51.5254L83.0043 53.8838L82.6439 54.8501L77.1737 56.6681L81.4156 58.224L80.957 59.4851L74.504 57.1267L74.8807 56.1113L80.22 54.3097Z"
      fill="white"
    ></path>
  </svg>
);
export default Xela;
