import React from "react";
import styles from "../components/about.module.css";
import img1 from "../assets/mwg-swiper1.avif";
import group from "../assets/group_img.avif";
import group1 from "../assets/image1.avif"
import { FaPause } from "react-icons/fa";
import TeamSection from "./Team";
import { BlogSwiper, LogoSwiper, TestimonialSwiper } from "./SwiperComp";
import Testimonial from "./Testimonial";

export default function AboutUs() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Who we are</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={group1} />
        </div>
      </div>

      


{/*Experience  */}
      <section className={styles.experience}>
        <div className={styles.group_img_div}>
          <img src={group} alt="our group image"/>
        </div>

        <div className={styles.text_box}>
          <div>
            <h2>// IT'S EXCITING</h2>
            <h1>
              Our <span>progress</span> so far
            </h1>
          </div>
          <p>
           In our journey so far, we've completed various <a href="/project">projects</a> and still counting :)
          </p>

          <div className={styles.experience_div}>
            <div className={styles.experience_status}>
              <h1>
                100<span>+</span>
              </h1>
              <h4>Completed Projects</h4>
            </div>
            <div className={styles.experience_status}>
              <h1>
                20<span></span>
              </h1>
              <h4>In Progress</h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.video}>
          <div className={styles.svg_div}>
            <FaPause />
          </div>
          <h2>We Deliver Solution with the Goal of A Trusting Relationships</h2>
          <p>
            Appropriate for your specific business, making it easy for you to
            have quality IT services.
          </p>
          <a href="https://www.youtube.com/@MobileWebGhana">Watch More</a>
        </div>
      </section>
      <TeamSection/>
      <LogoSwiper />
      <br/>
      <br/>
      <br/>
      <Testimonial/>
      {/* Testimonials section will go here */}
    </>
  );
}
