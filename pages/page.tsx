import React, { useEffect } from "react";
import Ellipse from "../components/ellipse";

const Page = () => {
  useEffect(() => {
    (document.querySelector(".page-block__others_block") as HTMLElement).style.height = `${(document.querySelector(".page-block h1") as HTMLElement).clientHeight.toString()}px`;
  }, []);

  return (
    <div className="page">
      <div className="page-block max-w_1210">
        <Ellipse />
        <Ellipse />
        <h1>
          <span>Front-End</span>
          <br />
          <span>Developer</span>
        </h1>
        <div className="page-block__others_block" style={{ height: "auto" }}>
          <div className="page-block__button">Start my career change</div>
          <p className="page-block__text">Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more). </p>
          <h3 className="page-block__courses">courses</h3>
        </div>
      </div>
      <div className="page__bottom-gradient"></div>
    </div>
  );
};

export default Page;
