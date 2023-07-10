import React from "react";
import styles from "./donate.module.css";
import img2 from "../assets/aboutUs.avif";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import { Link } from "react-router-dom";

import { BsCoin } from "react-icons/bs";
import FollowUs from "./FollowUs";

const Donate = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            {/* <h1>Empower change and make a lasting impact by becoming a transformative donor.</h1> */}
            <h1>Make a donation</h1>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img2} />
        </div>
      </div>

      <section className={styles.experience_div}>
        <div className={styles.experience}>
          <div className={styles.text_box}>
            <div>
              <h2>// DONATE</h2>
              <h1>
                Empower change <span>and make a</span> lasting impact
              </h1>
            </div>

            <p>
              Harness the power within you to empower change and leave a lasting
              impact on the world. Be the catalyst for transformation and create
              a legacy that inspires generations to come. Together, let's ignite
              a movement of positive change and shape a brighter future for all.
            </p>
          </div>

          <div className={styles.img_div}>
            <img src={img3} />
            <br />
            <br />
            <Link to="/payment">
              <button>
                Make Donations <BsCoin />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.experience_div}>
        <div className={styles.experience}>
          <div className={styles.text_box}>
            <div>
              <h2>// DONATE</h2>
              <h1>
                How <span>Donations</span> are used
              </h1>
            </div>

            <p>
              At Mobile Web Ghana, we believe in transparency and accountability
              when it comes to utilizing your generous donations.<br/> Here's how
              your contributions make a meaningful difference:
            </p>
          </div>

          <div className={styles.img_div}>
            <br />
            <br />
            <Link 
            to="/payment"
            >
              <button>
                Donate <BsCoin />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <FollowUs />
    </>
  );
};

export default Donate;
