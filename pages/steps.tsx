import React, { useEffect } from "react";
import Ellipse from "../components/ellipse";
import Step_Line from "../components/steps/step_line";

const Steps = () => {
  useEffect(() => {
    (document.querySelector(".steps__info-middle") as HTMLElement).style.height = `${(document.querySelector(".steps__info-right") as HTMLElement).clientHeight.toString()}px`;
  }, []);

  return (
    <div className="steps" id="steps">
      <Ellipse />
      <div className="steps__block">
        <h2>Steps</h2>
        <div className="steps__info">
          <div className="steps__info-left">
            <div className="steps__info_block steps__info_1">
              <h4 className="steps__info_title">Steps 1</h4>
              <h3 className="steps__info_discription">Introduction to Front-End</h3>
              <p className="p-1">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
              <Step_Line />
            </div>
            <div className="steps__info_block steps__info_3">
              <h4 className="steps__info_title">Steps 2</h4>
              <h3 className="steps__info_discription">Overview of Development</h3>
              <p className="p-1">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
              <Step_Line />
            </div>
            <div className="steps__info_block steps__info_5">
              <h4 className="steps__info_title">Steps 3</h4>
              <h3 className="steps__info_discription">Introduction to Front-End </h3>
              <p className="p-1">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
              <Step_Line />
            </div>
          </div>
          <div className="steps__info-middle" style={{ height: "auto" }}>
            <div className="middle-line"></div>
          </div>
          <div className="steps__info-right">
            <div className="steps__info_block steps__info_2">
              <h4 className="steps__info_title">Steps 4</h4>
              <h3 className="steps__info_discription">Overview of Development</h3>
              <p className="p-1">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
              <Step_Line />
            </div>
            <div className="steps__info_block steps__info_4">
              <h4 className="steps__info_title">Steps 5</h4>
              <h3 className="steps__info_discription">Introduction to Front-End </h3>
              <p className="p-1">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
              <Step_Line />
            </div>
            <div className="steps__info_block steps__info_6">
              <h4 className="steps__info_title">Steps 6</h4>
              <h3 className="steps__info_discription">Overview of Development</h3>
              <p className="p-1">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
              <Step_Line />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
