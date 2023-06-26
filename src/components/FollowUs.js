import React from 'react';
import { Link } from "react-router-dom";

import styles from "../components/followus.module.css";

import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-skill-icons/instagram";


const FollowUs =()=> {
    return (
        <section className={styles.contact_sec}>
        <div className={styles.img_div}></div>
        <div className={styles.text_box}>
          
          <h1>
            Follow <span>Us</span> On
          </h1>

          <div className={styles.svgS}>
          <Link to="https://www.facebook.com/MobileWebGhana/">
            <div className={styles.svg_div}>
                <FaFacebookSquare className={styles.facebook} />
            </div>
              </Link>
              <Link to="https://instagram.com/mobilewebgh?igshid=OGQ5ZDc2ODk2ZA==">
            <div className={styles.svg_div}>
                <Icon icon={instagramIcon} className={styles.instagram} />
            </div>
              </Link>
              <Link to="https://www.linkedin.com/company/mobile-web-ghana/">
            <div className={styles.svg_div}>
                <FaLinkedin className={styles.linkedin} />
            </div>
              </Link>
              <Link to="https://twitter.com/MobileWebGhana">
            <div className={styles.svg_div}>
                <FaTwitter className={styles.twitter} />
            </div>
              </Link>
          </div>
        </div>
      </section>
    )
}

export default FollowUs
