import React from "react";
import styles from "../components/testimonial.module.css";
import { TestimonialSwiper } from "./SwiperComp";

import design from "../assets/abstract.png";

const Testimonial = () => {
  return (
    <>
      <section className={styles.testimonial_sec}>
        <div className={styles.img_div}>
          <img src={design} alt="Our design" />
        </div>
        <div className={styles.text_box}>
          <h2>// Our Testimonials</h2>
          <h1>
            What people <span>say</span> about us
          </h1>
        </div>

        <TestimonialSwiper/>
        <div className={styles.img_div_1}>
          <img src={design} alt="Our design" />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
