import React from "react";
import styles from "../components/blog.module.css";
import { BlogSwiper } from "./SwiperComp";
import img1 from "../assets/mwg-swiper1.jpg"

import design from "../assets/abstract.png";

const Blog = () => {
  return (
    <>
     {/* <div class={styles.banner}>
        <div className={styles.overlay}>
          <div class={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Blog</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div> */}

      <section className={styles.blog_sec}>
        <div className={styles.img_div}>
          <img src={design} alt="Our design" />
        </div>
        <div className={styles.text_box}>
          <h2>// Our Blog</h2>
          <h1>
            Our Latest <span>News</span>
          </h1>
        </div>

        <BlogSwiper />
        <div className={styles.img_div_1}>
          <img src={design} alt="Our design" />
        </div>
      </section>
    </>
  );
};

export default Blog;
