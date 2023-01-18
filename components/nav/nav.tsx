import React, { useState } from "react";
import Logo from "./logo";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Nav = () => {
  const { scroll } = useLocomotiveScroll();
  const [click, setClick] = useState<Boolean>(false);

  const handleScroll = (id: any) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "0",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <nav className="navbar" data-scroll data-scroll-sticky data-scroll-target="#container">
      <div className="navbar__left">
        <Logo />
      </div>
      <div className="navbar__right">
        <ul>
          <li onClick={() => handleScroll("#about")}>About</li>
          <li onClick={() => handleScroll("#Programming-technologies")}>Programs</li>
          <li onClick={() => handleScroll("#steps")}>Steps</li>
          <li onClick={() => handleScroll("#Questions")}>Questions</li>
          <li onClick={() => handleScroll("#Contact_us")}>Get in touch</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
