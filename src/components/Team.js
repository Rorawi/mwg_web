import React from "react";
import styles from "../components/team.module.css";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";
import talika from "../assets/talika.avif"
import director from "../assets/director.avif";
import yao from "../assets/yao.avif";
import estella from "../assets/estella.avif";
import isaac from "../assets/isaac.avif";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const team = [
    {
      linkedIn: "https://www.linkedin.com/in/florencetoffa/",
      facebook: "https://www.facebook.com/florencetoffa",
      twitter: "https://twitter.com/florencetoffa",
      name: "Florence Toffa",
      img: director,
      title: "Director",
    },
    {
      linkedIn: "https://www.linkedin.com/in/florencetoffa/",
      facebook: "https://www.facebook.com/florencetoffa",
      twitter: "https://twitter.com/florencetoffa",
      name: "Prince Yaw Ameyedowo",
      img: yao,
      title: "Financial Accountant",
    },
    {
      linkedIn: "https://www.linkedin.com/in/talika-bernard/",
      facebook: "https://www.facebook.com/florencetoffa",
      twitter: "https://twitter.com/florencetoffa",
      name: "Talika Bernard",
      img: talika,
      title: "Graphic Designer",
    },
    {
      linkedIn: "https://www.linkedin.com/in/estella-hilda-anaman-b356a6151",
      facebook: "https://www.facebook.com/florencetoffa",
      twitter: "https://twitter.com/florencetoffa",
      name: "Estella Hilda Anaman",
      img: estella,
      title: "Resource Manager",
    },
    {
      linkedIn: "https://www.linkedin.com/in/isaac-acheampong-162673203/",
      facebook: "https://www.facebook.com/florencetoffa",
      twitter: "https://twitter.com/florencetoffa",
      name: "Isaac Acheampong",
      img: director,
      title: "Social Media Director",
    },
  ];
  return (
    <>
      <section className={styles.team_sec} id="team">
        <div className={styles.text_box}>
          <div>
            <h2>// Our Strong Team</h2>
            <h1>
              Meet out <span>dedicated</span> team
            </h1>
          </div>
          <p>
            Meet our amazing team of skilled professionals, dedicated to
            delivering exceptional results and exceeding expectations.
          </p>
        </div>
        <div className={styles.wrapper}>
      {team.map((teamitem)=> {
        return (
          <>
           <div className={styles.profile}>
            <div className={styles.img_div}>
              <img src={teamitem.img} alt="" className={styles.pro_img} />
            </div>

            <div className={styles.dtl}>
              <h1 className={styles.name}>{teamitem.name}</h1>
              <h3 className={styles.bio}>{teamitem.title}</h3>
            </div>
            <div className={styles.overlay}>
              <div className={styles.social}>
                <Link to={teamitem.linkedIn}>
                  <FaLinkedin />
                </Link>
                <Link to={teamitem.facebook}>
                  <FaFacebookSquare />
                </Link>
                <Link to={teamitem.twitter}>
                  <FaTwitter />
                </Link>
                <Link to="">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          </>
        )
      })}
        </div>
      </section>

    </>
  );
};

export default TeamSection;
