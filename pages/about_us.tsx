import React from "react";
import { Line_1, Line_2, Line_3 } from "../components/lines_about";
import { kristen, roberto, Wade } from "../media/images";
import Ellipse from "../components/ellipse";

const About_Us = () => {
  return (
    <div className="about" id="about">
      <Ellipse />
      <div className="about__block">
        <h2 className="about__title">About Us</h2>
        <div className="about__mentors-block">
          <h3>Mentors</h3>
          <div className="about__lines">
            <div className="about__line about__line-1">
              <Line_1 />
              <div className="image">
                <div className="image__absolute"></div>
                <img src={Wade.src} alt="" />
              </div>
              <div className="image__discription">
                <h4 className="image__name">Wade Warren</h4>
                <p className="image__discription-about">Front-end engineers work closely with designers</p>
              </div>
            </div>
            <div className="about__line about__line-2">
              <Line_2 />
              <div className="image">
                <div className="image__absolute"></div>
                <img src={kristen.src} alt="" />
              </div>
              <div className="image__discription">
                <h4 className="image__name">Kristin Watson</h4>
                <p className="image__discription-about">Front-end engineers work closely with designers</p>
              </div>
            </div>
            <div className="about__line about__line-3">
              <Line_3 />
              <div className="image">
                <div className="image__absolute"></div>
                <img src={roberto.src} alt="" />
              </div>
              <div className="image__discription">
                <h4 className="image__name">Robert Fox</h4>
                <p className="image__discription-about">Front-end engineers work closely with designers</p>
              </div>
            </div>
          </div>
        </div>
        <p className="about__p">Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
      </div>
      <div className="Front">Front</div>
    </div>
  );
};
export default About_Us;
