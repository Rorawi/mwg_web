import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/project.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import youth from "../assets/Youth-Media.jpg";
import robotics from "../assets/Coding-and-Robotics.jpg"
import project_vfg from "../assets/project-vfg.jpg"
import cfg from "../assets/code-for-ghana.jpg"
import oca from "../assets/after-11.png"
import aca from "../assets/american-corner-agbogba.jpg"
import adsc from "../assets/ADSC-11.jpg"
import csa from "../assets/CSA.jpg"
import tawep from "../assets/TaWEP.jpg"
import microsoft from "../assets/apps-factory.jpg"
import mcare from "../assets/mcare.jpg"
import fime from "../assets/fime.jpg"
import advocacy from "../assets/advocacy.jpg"
import { FaPause } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

import Testimonial from "./Testimonial";

const Projects = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Projects</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={robotics} />
        </div>
      </div>

      <section className={styles.projects_sec}>
        <div className={styles.img_div}></div>
        <div className={styles.text_box}>
          <h2>// Our Projects</h2>
          <h1>
            What <span>We</span> Do
          </h1>

          <p className={styles.text_box}>
            Mobile Web Ghana is not only purposed with being services providers
            but also solution providers. We undertake projects which are either
            aimed at solving conspicuous problems in our society or upskilling
            people through technology and entrepreneurship training programmes.
          </p>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={youth} />
            <h2>Youth Media Literacy Program</h2>
            <p>
              This project is an initiative of Mobile Web Ghana and the U.S
              Embassy in Ghana which seeks to increase the capacity of youths to
              consume and disseminate media contents responsibly.
            </p>
            <Link to="">
          <button>
            Read More
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
          </div>

          <div className={styles.project_div}>
            <img src={robotics} />
            <h2>Coding and Robotics Training</h2>
            <p>
              Mobile Web Ghana has taken keen interest in these future
              technologies Ensuring that every child in Ghana is equipped with
              digital skills, STEM education ( Science, Technology, Engineering
              & Mathematics) through robotics coding classes.
            </p>
            <Link to="https://africadigitalskillsconference.org/">
          <button>
            Read More
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={project_vfg} />
            <h2>Visuals for Gender</h2>
            <p>
              This project is aimed at equipping citizens, policymakers and
              Civil Society Organizations to understand gender-based issues
              using both dynamic and static data visualizations.
            </p>

            <Link to="http://www.visualsforgender.org/">
          <button>
            Read More
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
          </div>

          <div className={styles.project_div}>
            <img src={cfg} />
            <h2>Code for Ghana</h2>
            <p>
              An Open Data project that promotes responsive, innovative and
              effective governance through technology. This is achieved by
              telling evoking stories with data that is in relation to the
              government.
            </p>

            <Link to="http://code4ghana.org/">
          <button>
            Read More
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={oca} />
            <h2>Open Cities Accra</h2>
            <p>
              The Open Cities Accra Project seeks to make Alogboshie and its
              environs resilient to natural disasters, especially flooding. The
              project will also involve the remote mapping of Nima, Akweteman
              and Alajo
            </p>
            <Link to="https://opencitiesproject.org/accra/">
          <button>
            Read More
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
          </div>

          <div className={styles.project_div}>
            <img src={aca} />
            <h2>American Corner Agbogba</h2>
            <p>
              In partnership with Mobile Web Ghana, American Corner Agbogba
              provides access to current and reliable information about the
              United States through book collections, Internet access, and
              events and activities for everyone.
            </p>
            <Link to="https://gh.usembassy.gov/education-culture/american-corners/">
          <button>
            Read More
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={adsc} />
            <h2>Africa Digital Skills Conference</h2>
            <p>
              The Africa Digital Skills Conference is a three-day annual
              conference that provides institutions, government agencies,
              professionals, entrepreneurs, students and the youth at large in
              Ghana and Africa with an opportunity to teach and learn digital
              skills.
            </p>
            <Link to="https://africadigitalskillsconference.org/">
          <button>
            Read More
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
          </div>

          <div className={styles.project_div}>
            <img src={csa} />
            <h2>Clean Streets Accra</h2>
            <p>
              Clean Streets Accra is a city-wide effort to work with district
              assemblies and make Accra the cleanest city in Africa.
            </p>
            <Link to="https://africadigitalskillsconference.org/">
          <button>
            Read More
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={tawep} />
            <h2>Technology and Women Empowerment Program (TaWEP)</h2>
            <p>
              Technology and Women Empowerment Program is aimed at developing
              and preparing women and girls with basic digital skills,
              work-readiness skills and encouraging women to take up leadership
              positions with the hope of building their capacity in their
              careers and education and becoming great leaders.
            </p>
            <Link to="">
          <button>
            Read More
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>
          </div>

          <div className={styles.project_div}>
            <img src={microsoft} />
            <h2>Microsoft AppFactory</h2>
            <p>
              The Ghana AppFactory is part of Microsoft’s 4Afrika initiative.
              The AppFactory is aimed at equipping young software developers and
              coders with hands-on experience while helping them build critical
              business skills to secure jobs or create their own businesses.
            </p>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={mcare} />
            <h2> mCare</h2>
            <p>
              This project provides locally-relevant maternal and child
              health-related information for prospective mothers, pregnant
              women, nursing mothers and all caregivers.
            </p>
          </div>

          <div className={styles.project_div}>
            <img src={fime} />
            <h2>FIME</h2>
            <p>
              Females in Mobile Entrepreneurship (FiME) is an initiative of
              Mobile Web Ghana to increase female participation in Science,
              Technology, Engineering Mathematics (STEM). This programme seeks
              to foster entrepreneurship and empower females through mobile
              technology training and events.
            </p>
          </div>
        </div>

        <div className={styles.projects_div}>
          <div className={styles.project_div}>
            <img src={advocacy} />
            <h2> Advocacy</h2>
            <p>
              We contribute to the country’s realization of its ongoing
              development strategy, both by building capacity in a generation of
              underskilled young people, and by supporting the creation of
              digital services that can replace and complement the set of
              publicly available services for citizens and communities.
            </p>
          </div>

          <div className={styles.project_div_soon}>
           <h2 className={styles.soon}>COMING SOON...</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
