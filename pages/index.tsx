import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Page from "./page";
import Nav from "../components/nav/nav";
import About_Us from "./about_us";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollTriggerProxy from "./utils/ScrollTriggerProxy";
import React, { useEffect, useRef, Suspense, useState } from "react";
import Programming_technologies from "./Programming_technologies";

import Steps from "./steps";
import Questions from "./Questions";
import Review from "./Review";
import Gallery from "./Gallery";
import Footer from "./footer";
import Contact_us from "./contact_us";
import Loader from "./Loader";

import { AnimatePresence } from "framer-motion";

// const Steps = React.lazy(() => import("./steps"));
// const Questions = React.lazy(() => import("./Questions"));
// const Review = React.lazy(() => import("./Review"));
// const Gallery = React.lazy(() => import("./Gallery"));
// const Footer = React.lazy(() => import("./footer"));
// const Contact_us = React.lazy(() => import("./contact_us"));
// const Loader = React.lazy(() => import("./Loader"));

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        InertiaPlugin: 0.55,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
      <main className="container" id="container" data-scroll-container ref={containerRef}>
        <ScrollTriggerProxy />
        <AnimatePresence>
          {Loaded ? null : <Loader />}
          <Nav />
          <Page />
          <About_Us />
          <Programming_technologies />
          <Steps />
          <Questions />
          <Review />
          <Gallery />
          <Contact_us />
          <Footer />
        </AnimatePresence>
      </main>
    </LocomotiveScrollProvider>
  );
}
