import React, { useState } from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import {
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import styles from "../components/footer.module.css";
import { Link } from "react-router-dom";
import mwgLogo from "../assets/mwg-logo.avif";
import { Timeline } from "react-twitter-widgets";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import emailjs from "@emailjs/browser";

import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-skill-icons/instagram";

import { Tweet } from 'react-tweet'

const Footer = () => {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm(
        "service_ibep18s",
        "template_lxxs1s8",
        form,
        "UX2qzirfmkrZ_N-CG"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // setSentMessage(!sentmessage)
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    form.reset();
  };
  return (
    <footer>
      <section className={styles.details}>
        <div className={styles.profile}>
          <div className={styles.logoDiv}>
            <Link>
              <img src={mwgLogo} alt="MWG Logo" className={styles.img} />
            </Link>
            <h2>Who we are</h2>
          </div>
          <p>
            Mobile Web Ghana is a technology and entrepreneurship hub that is
            dedicated to empowering the youth to develop mobile and web
            applications and open data solutions to solve local problems.
          </p>

          <div className={styles.socials}>
            <h2>Follow Us</h2>
            <div>
              <Link to="https://www.facebook.com/MobileWebGhana/">
                <FaFacebookSquare className={styles.facebook} />
              </Link>

              <Link to="https://instagram.com/mobilewebgh?igshid=OGQ5ZDc2ODk2ZA==">
                {/* <FaInstagramSquare className={styles.instagram}/> */}
                {/* <img src={require("../assets/Instagram-Logo.png")} className={styles.instagram}/> */}
                <Icon icon={instagramIcon} width="20" height="20" />
              </Link>
              <Link to="https://www.linkedin.com/company/mobile-web-ghana/">
                <FaLinkedin className={styles.linkedin} />
              </Link>

              <Link to="https://twitter.com/MobileWebGhana">
                <FaTwitter className={styles.twitter} />
              </Link>
              {/* <SiGmail className="mx-2.5 text-[17px] mb-[5px] " /> */}
            </div>
          </div>
        </div>

        <TwitterTimelineEmbed
          nofooter
          sourceType="profile"
          screenName="MobileWebGhana"
          options={{ height: 300, width: 350 }}
          className={styles.twitter_feed}
        />

{/* <Tweet className="light" id="1628832338187636740" /> */}
      </section>

      <hr />

      <p className={styles.hr_p}>
        &copy; 2023 mobilewebghana. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

function TwitterFeeds() {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "MobileWebGhana",
        }}
        options={{
          username: "MobileWebGhana",
          height: "400",
          width: "400",
        }}
      />
    </div>
  );
}
