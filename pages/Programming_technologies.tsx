import React from "react";
import Ellipse from "../components/ellipse";
import Pentagon from "../components/pentagon/pentagon";
import { Angular, vue, react, js } from "../media/images";

const Programming_technologies = () => {
  return (
    <div className="Programming-technologies" id="Programming-technologies">
      <Ellipse />
      <div className="Programming-technologies__block">
        <h2>
          Programming
          <br />
          technologies
        </h2>
        <p className="Programming_technologies__discription">By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>
        <div className="Programming_technologies__technologiesList">
          <div className="Programming_technologies__technologiesList_element Programming_technologies__Angular">
            <Pentagon />
            <img src={Angular.src} alt="" />
            <h4>Angular</h4>
          </div>
          <div className="Programming_technologies__technologiesList_element Programming_technologies__React">
            <Pentagon />
            <img src={vue.src} alt="" />
            <h4>React</h4>
          </div>
          <div className="Programming_technologies__technologiesList_element Programming_technologies__Vue.js">
            <Pentagon />
            <img src={react.src} alt="" />
            <h4>Vue.js</h4>
          </div>
          <div className="Programming_technologies__technologiesList_element Programming_technologies__JavaScript">
            <Pentagon />
            <img src={js.src} alt="" />
            <h4>JavaScript</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programming_technologies;
