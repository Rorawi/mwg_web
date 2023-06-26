import React from "react";
import styles from "../components/overview.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import experience from "../assets/experience.png";
import path from "../assets/path.png";
import { FaPeopleCarry, FaBullseye, FaLightbulb } from "react-icons/fa";

function OverView() {
  return (
    <>
      <div>
        <div className={styles.banner}>
          <div className={styles.overlay}>
            <div className={styles.banner_text}>
              <h1>Mobile Web Ghana</h1>
              <h3>| Who we are</h3>
            </div>
          </div>
          <div className={styles.img_div}>
            <img src={path} />
          </div>
        </div>

        <section className={styles.statements}>
          <div className={styles.statement}>
            <FaPeopleCarry />

            <h2>Who We Are</h2>
            <p>
              Mobile Web Ghana is a technology & entrepreneurship hub that is
              dedicated to empowering the youth to develop mobile and web
              applications and also come up with open data solutions to solve
              local problems.
            </p>
          </div>
          <div className={styles.statement}>
            <FaBullseye />

            <h2>Our Mission</h2>
            <p>
              To create a community of mobile technology entrepreneurs in Ghana.
            </p>
          </div>
          <div className={styles.statement}>
            <FaLightbulb />

            <h2>Our Vision</h2>
            <p>
              To create a generation of technology change agents and leaders who
              will use their skills to solve local problems in our communities.
            </p>
          </div>
        </section>

        <section className={styles.overview}>
          <div className={styles.text_box}>
            <h2>// Company Overview</h2>
            <h1>
              Building the capacity of <span>Tech-enthusiasts</span> to meet the
              demands of the tech industry.
            </h1>
          </div>

          <div className={styles.overview_statement_div}>
            <div className={styles.overview_statement}>
              <p>
                Our goal is to build the capacity of young tech-enthusiasts to
                be able to meet the demands of the tech industry in Ghana and
                beyond. We undertake some “ICT for development” projects that
                are aimed at improving social-economic and political development
                with particular emphasis on helping the marginalized in society.
                Creating a conducive working environment for tech-businesses is
                our priority and this we ensure by offering them co-working
                space, offices and start-up mentoring.
              </p>

              <div className={styles.img_div}>
                <img src={experience} />
              </div>
            </div>
            <div className={styles.overview_statement_reverse}>
              <p>
                Our goal is to build the capacity of young tech-enthusiasts to
                be able to meet the demands of the tech industry in Ghana and
                beyond. We undertake some “ICT for development” projects that
                are aimed at improving social-economic and political development
                with particular emphasis on helping the marginalized in society.
                Creating a conducive working environment for tech-businesses is
                our priority and this we ensure by offering them co-working
                space, offices and start-up mentoring.
              </p>

              <div className={styles.img_div}>
                <img src={path} />
              </div>
            </div>
            <div className={styles.overview_statement}>
              <p>
                Our goal is to build the capacity of young tech-enthusiasts to
                be able to meet the demands of the tech industry in Ghana and
                beyond. We undertake some “ICT for development” projects that
                are aimed at improving social-economic and political development
                with particular emphasis on helping the marginalized in society.
                Creating a conducive working environment for tech-businesses is
                our priority and this we ensure by offering them co-working
                space, offices and start-up mentoring.
              </p>

              <div className={styles.img_div}>
                <img src={experience} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OverView;
