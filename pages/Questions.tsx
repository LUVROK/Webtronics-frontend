import React from "react";
import Ellipse from "../components/ellipse";
import quest from "../media/images/3382.png";

const Questions = () => {
  const faq_full = [
    {
      summary: "What is the price?",
      details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      summary: "What is the price?",
      details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      summary: "What is the price?",
      details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      summary: "What is the price?",
      details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
    {
      summary: "What is the price?",
      details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
    },
  ];
  const changeActive = (i: number) => {
    if ((document.querySelector(`.faq-full:nth-of-type(${i}) svg`) as HTMLElement).style.height === "62px") {
      (document.querySelector(`.faq-full:nth-of-type(${i}) svg`) as HTMLElement).style.height = "166px";
      // (document.querySelector(`.faq-full:not(:nth-of-type(${i})) svg`) as HTMLElement).style.height = "62px";
      // (document.querySelector(`.faq-full summary:before`) as HTMLElement).style.content = "-";
    } else {
      (document.querySelector(`.faq-full:nth-of-type(${i}) svg`) as HTMLElement).style.height = "62px";
      // (document.querySelector(`.faq-full summary:before`) as HTMLElement).style.content = "+";
    }
  };
  return (
    <div className="Questions" id="Questions">
      <div className="Questions__block">
        <Ellipse />
        <h2>
          Frequently Asked
          <br />
          Questions
        </h2>
        <div className="Questions__content">
          <div className="Questions__content-left">
            <p className="p-1">
              Do you have any kind of questions?
              <br />
              We are here to help.
            </p>
            {/* тут затуп был, как сделать text shadow чтобы внутри был прозрачным */}
            <div className="Questions__mark">{/* <img src={quest.src} alt="" /> */}?</div>
          </div>
          <div className="Questions__content-right">
            <div className="faq-block">
              {faq_full.map((data, i) => (
                <div key={i} className="faq-full">
                  {/* <svg viewBox="0 0 703 62" style={{ height: "62px" }} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 54V27.6623L26.6623 0H695C699.418 0 703 3.58172 703 8V35.418L673.418 62H7.99998C3.58171 62 0 58.4183 0 54Z" fill="white" fillOpacity="0.05" />
                    <path d="M0.5 54V27.864L26.8748 0.5H695C699.142 0.5 702.5 3.85786 702.5 8V35.1951L673.226 61.5H7.99998C3.85785 61.5 0.5 58.1421 0.5 54Z" stroke="url(#paint0_linear_65_194)" strokeOpacity="0.7" />
                    <defs>
                      <linearGradient id="paint0_linear_65_194" x1="77.33" y1="5.83619" x2="81.2994" y2="90.9827" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#15BFFD" />
                        <stop offset="1" stopColor="#9C37FD" />
                      </linearGradient>
                    </defs>
                  </svg> */}
                  <svg style={{ height: "62px", width: "100%" }} viewBox="0 0 703 166" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 158V31.6623L31.6623 0H695C699.418 0 703 3.58172 703 8V129.418L666.418 166H7.99998C3.58171 166 0 162.418 0 158Z" fill="white" fillOpacity="0.05" />
                    <path d="M0.5 158V31.8694L31.8694 0.5H695C699.142 0.5 702.5 3.85786 702.5 8V129.211L666.211 165.5H7.99998C3.85785 165.5 0.5 162.142 0.5 158Z" stroke="url(#paint0_linear_141_56)" strokeOpacity="0.7" />
                    <defs>
                      <linearGradient id="paint0_linear_141_56" x1="77.33" y1="15.6259" x2="105.409" y2="240.589" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#15BFFD" />
                        <stop offset="1" stopColor="#9C37FD" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <details>
                    <summary onClick={() => changeActive(i + 1)}>
                      <h4>{data.summary}</h4>
                    </summary>
                    <p className="faq-details-bottom p-1">{data.details}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
