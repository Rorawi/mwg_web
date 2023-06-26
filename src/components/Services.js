import React from "react";
import styles from "../components/services.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import { FaPause } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import Testimonial from "./Testimonial";

function Services() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Services</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>

      <section className={styles.services_sec}>
        <div className={styles.img_div}></div>
        <div className={styles.text_box}>
          <h2>// Our Services</h2>
          <h1>
            What <span>We</span> Do
          </h1>
        </div>

        <div className={styles.services_div}>
          <div className={styles.service_div}>
            <img src={img1}/>

            {/* <div className={styles.svg_div}>
              <GiHouse />
            </div> */}
            <h2>Technology Hub</h2>
            <p>
              Mobile Web Ghana is a hub that provides services to startups and
              individuals in their early stages of business. They offer
              affordable office space, free internet and utilities, capacity
              building events, partnerships and mentorship, and access to
              funding opportunities. These services aim to support and nurture
              startups and individuals as they grow their businesses.
            </p>
          </div>

          <div className={styles.service_div}>
            <img src={img1}/>

            {/* <div className={styles.svg_div}>
              <GiHouse />
            </div> */}
            <h2>ICT4D Projects / IT Consultancy</h2>
            <p>
              Based on the wealth of experience we have in the Ghanaian tech
              space, we also offer consultancy services to companies,
              international organizations and tech startups.
            </p>
          </div>
        </div>

        <div className={styles.services_div}>
          <div className={styles.service_div}>
            <img src={img1}/>

            {/* <div className={styles.svg_div}>
              <GiHouse />
            </div> */}
            <h2>Open Data Projects</h2>
            <p>
              Mobile Web Ghana is very active in the Open Data space in Ghana.
              We have undertaken a number of projects that sought to open up
              government data to the general public, establish a ‘data
              analysis/visualization’ culture in Ghanaian newsrooms and also
              build the capacity of members of staff of government Ministries,
              Departments and Agencies including open data enthusiasts. The
              vision we have for this country is that very soon we would see
              government institutions open up their data which will engender a
              lot innovations in the country.
            </p>
          </div>

          <div className={styles.service_div}>
            <img src={img1}/>

            {/* <div className={styles.svg_div}>
              <GiHouse />
            </div> */}
            <h2>Startup Incubation & Mentoring</h2>
            <p>
              The startups are the smaller IT companies who are usually now
              starting to grow and find their feet in the industry. They often
              provide simple IT solutions to clients on-demand or develop
              software to help ease the work of people working in an entire
              industry. We are devoted to seeing the ones in a community grow
              and flourish to their fullest potential.
            </p>
          </div>
        </div>
        <div className={styles.services_div}>
          <div className={styles.service_div}>
            <img src={img1}/>

            {/* <div className={styles.svg_div}>
              <GiHouse />
            </div> */}
            <h2>Girls in ICT</h2>
            <p>
              Women are poorly represented in the technology ecosystem in the
              country. We recognize that this is a global phenomenon as well. To
              curb the situation and bring some balance in the technology space
              in the country and beyond, we are constantly organizing training
              programs for women. The Females In Mobile Entrepreneurship (FiME)
              training program, was started in 2014 to train young ladies who
              desire to be software entrepreneurs.
            </p>
          </div>
          <div className={styles.service_div_soon}>
           <h2 className={styles.soon}>COMING SOON...</h2>
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

      <Testimonial/>
    </>
  );
}

export default Services;
