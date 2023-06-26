import React from "react";
import styles from "../components/event.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import mcare from "../assets/mcare.jpg"


import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Events() {
  const events = [
    {
      id: 1,
      eventName: "Education U.S.A",
      img: img1,
      time: "10AM GMT",
      eventOverview:
        `This is an event mainly for the youth which seeks to increase the capacity 
        of youths to consume and disseminate media contents responsibly.`,
        signUpLink: "https://tailwindcss.com/docs/box-shadow"
    },
    {
      id: 2,
      eventName: "Education U.S.A",
      img: mcare,
      time: "10AM GMT",
      eventOverview:
        `This is an event mainly for the youth which seeks to increase the
         capacity of youths to consume and disseminate media contents responsibly.`,
        signUpLink: "https://tailwindcss.com/docs/box-shadow"
    },
    // {
    //   id: 2,
    //   eventName: "U.S Embassy",
    //   time: "9AM GMT",
    //   eventOverview:
    //     "This is an event mainly for  which seeks to increase the capacity of youths to consume and disseminate media contents responsibly.",
    //     signUpLink: "https://www.youtube.com/watch?v=pEy-wOiMJps"

    // },
  ];
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Events</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>

      <section className={styles.event_sec}>
        <div className={styles.text_box}>
          <h2>// Our Events</h2>
          <h1>
            Exciting <span>Programs</span> We Have This Week
          </h1>

          <p className={styles.text_box}>
            Mobile Web Ghana always bring up exciting programs for Lorem Ispium
          </p>
        </div>
      </section>

      <section className={styles.events_div}>
        {events.map((event) => {
          return (
            <>
            <div className={styles.event_div} key={event.id}>

              <div className={styles.img_div_flyer}>
                <img src={event.img}/>
              </div>
              <div className={styles.details}>
                <div>
                  <h2>{event.eventName}</h2>
                  <p>{event.eventOverview}</p>
                  <br/>
                  <h2>
                  {event.time}
                  </h2>
                </div>
                
                <Link to={event.signUpLink}>
          <button>
            Sign UP
            <div className={styles.svg_div}>
              {" "}
              <AiOutlineArrowRight />
            </div>
          </button>
          </Link>

            
              
              </div>
            </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default Events;
