import React from "react";
import img from "../assets/mwg.hub.png";
import img1 from "../assets/mwg-swiper1.jpg";
import styles from "../components/home.module.css";
import Hero from "./Hero";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { LogoSwiper, SwiperComp } from "./SwiperComp";
import Team from "./Team";
import Map from "./Map";
import Blog from "./Blog";
import Subscribe from "./Subscribe";

export default function Home() {
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
              <img src={img1} alt="Our image" />
            </div>
          </div>

          <div className={styles.text_box}>
            <h2>// About The Company</h2>
            <h1>
              We empower the <span>youth</span> to solve local problems
            </h1>
            <p>
              Mobile Web Ghana is a technology and entrepreneurship hub that is
              dedicated to empowering the youth to develop mobile and web
              applications and open data solutions to solve local problems. Our
              goal is to build the capacity of young tech-enthusiasts to be able
              to meet the demands of the tech industry in Ghana and beyond.We
              also create a conducive working environment for tech-businesses to
              thrive by offering them a co-working space, offices and start-up
              mentoring. We undertake some ICT for development projects.
            </p>
          </div>
        </section>

        <section className={styles.services}>
          <div className={styles.text_box}>
            <div>
              <h2>// Our Services</h2>
              <h1>
                We empower the <span>youth</span> to solve local problems
              </h1>
            </div>
            <p>
              Mobile Web Ghana is a technology and entrepreneurship hub that is
              dedicated to empowering the youth to develop mobile and web
              applications and open data solutions to solve local problems. Our
              goal is to
            </p>
          </div>
          <SwiperComp />
        </section>
      </main>
          <LogoSwiper />
          <br/>
          <br/>
          <br/>
          {/* <Team/> */}
          <Map/>
          <Blog />
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
