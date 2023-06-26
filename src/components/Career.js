import React from "react";
import styles from "../components/career.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import { FaBook, FaHandshake } from "react-icons/fa";
import { BiMessage, BiWorld } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Career = () => {
  const jobs = [
    {
      id: 1,
      jobName: "Content Creator Intern",
      jobOverview:
        "We're looking for an intern well abreast with communication skills.",
        signUpLink: "https://tailwindcss.com/docs/box-shadow"
    },
    {
      id: 2,
      jobName: "Backend Developer",
      jobOverview:
        "We're looking for a well versed backend developer well abreast with languages like Python,Django,MongoDb and so on",
        signUpLink: "https://www.youtube.com/watch?v=pEy-wOiMJps"

    },
    {
      id: 3,
      jobName: "UI/UX Designer",
      jobOverview:
        "We're looking for a well versed UI/UX designer with experience in Figma,Adode XD,PhotoShop,Adobe Illustrator",
        signUpLink: "https://www.youtube.com/watch?v=pEy-wOiMJps"

    },
  ];
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Career</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>
      <section className={styles.career}>
        <div className={styles.text_box}>
          <h2>// About The Company</h2>
          <h1>
            We'd <span>love</span> to have you in our team
          </h1>
          <p>
          Mobile Web Ghana is inviting applications for graduates who wish to do their national service with the organization to apply for the year 2022 – 2023 period.<br/>
          {/* Are you a

          <ul>
  <li>web or mobile app developer</li>
  <li>social media strategist</li>
  <li>creative blogger</li>
  <li>graphic designer</li>
  <li>marketing and sales personnel</li>
  <li>planning students</li>
</ul> */}


We are looking forward to working with smart, and proactive graduates. 

          </p>

          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfE3hhIEr5sT2Z_4_9fMFXG_by2ubMepgngmWKiC2UP7ok4Vw/viewform">
          <button>
            Join Our Team
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
        </div>

        <div>
          <div className={styles.career_details}>
            <div className={styles.career_detail}>
              <div className={styles.svg_div}>
                <FaHandshake />
              </div>
              <h2>Friendly Environment</h2>
            </div>
            <div className={styles.career_detail} id={styles.inset}>
              <div className={styles.svg_div}>
                <BiWorld />
              </div>
              <h2>One In a Miilion</h2>
            </div>
          </div>

          <div className={styles.career_details}>
            <div className={styles.career_detail} id={styles.inset}>
              <div className={styles.svg_div}>
                <BiMessage />
              </div>
              <h2>Open Communications</h2>
            </div>
            <div className={styles.career_detail}>
              <div className={styles.svg_div}>
                <FaBook />
              </div>
              <h2>Determined</h2>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.events_div}>
        {jobs.map((job) => {
          return (
            <>
            <div className={styles.event_div} key={job.id}>
             
              
                <div>
                  <h2>{job.jobName}</h2>
                  <p>{job.jobOverview}</p>
                </div>
                
          
                   <Link to={job.signUpLink}>
             <button>
               Enroll
               <div className={styles.svg_div}>
                 {" "}
                 <AiOutlineArrowRight />
               </div>
             </button>
             </Link>
            </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Career;
