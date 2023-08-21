import React, { useState, useEffect } from "react";
import img from "../assets/img3.avif";
import img1 from "../assets/img2.avif";
import styles from "../components/home.module.css";
import Hero from "./Hero";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { LogoSwiper, SwiperComp } from "./SwiperComp";
import { motion, useAnimation } from "framer-motion";

import Team from "./Team";
import Map from "./Map";
import Blog from "./Blog";
import Subscribe from "./Subscribe";
import FollowUs from "./FollowUs";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust this threshold based on when you want the animation to trigger
      const threshold = 300;

      if (scrollY > threshold) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div>
      <Hero />
      <main>
        <section className={styles.sec_01}>
          <div className={styles.img_div}>
            <div className={styles.img1}>
              <img src={img1} alt="Our image" />
            </div>
            <div className={styles.img2}>
              <img src={img} alt="Our image" />
            </div>
          </div>

          <div className={styles.text_box}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={controls}
              transition={{ duration: 0.3 }}
            >
              // About The Company
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              We empower the <span>youth</span> to solve local problems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.7 }}
            >
              Mobile Web Ghana is a technology and entrepreneurship hub that is
              dedicated to empowering the youth to develop mobile and web
              applications and open data solutions to solve local problems. Our
              goal is to build the capacity of young tech-enthusiasts to be able
              to meet the demands of the tech industry in Ghana and beyond.We
              also create a conducive working environment for tech-businesses to
              thrive by offering them a co-working space, offices and start-up
              mentoring. We undertake some ICT for development projects.
            </motion.p>
          </div>
        </section>

        <section className={styles.services}>
          <motion.div
            className={styles.text_box}
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h2>// Our Services</h2>
              <h1>
                We empower the <span>youth</span> to solve local problems
              </h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={controls} // Use the animation controls
              transition={{ duration: 0.8 }}
            >
              Mobile Web Ghana is a technology and entrepreneurship hub that is
              dedicated to empowering the youth to develop mobile and web
              applications and open data solutions to solve local problems.
            </motion.p>
          </motion.div>
          <SwiperComp />
        </section>
      </main>
      <LogoSwiper />
      <FollowUs />
      <br />
      <br />
      <br />
      {/* <Team/> */}
      <Map />
      {/* <Blog /> */}
      <Subscribe />

      {/* <LogoSwiper/> */}
    </div>
  );
}

// they're services are:
// Technology hubs
// Data Science
// IT consultancy
// Startup incubation and mentorship
// and Girls in ICT
