import React from "react";
import Ellipse from "../components/ellipse";
import { gallery1, gallery2, gallery3 } from "../media/images";

const Gallery = () => {
  return (
    <div className="Gallery">
      <Ellipse />
      <div className="Gallery__block">
        <h2>Gallery</h2>
        <div className="Gallery__content">
          <div className="Gallery__content-left">
            <p className="p-1">By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects. </p>
            <img src={gallery1.src} alt="" />
          </div>
          <div className="Gallery__content-right">
            <div className="Gallery__content-right-photos">
              <img src={gallery2.src} alt="" />
              <img src={gallery3.src} alt="" />
            </div>
            <p className="p-1">If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
