import React from "react";
import styles from "../components/map.module.css";
import { BiMap, BiWorld } from "react-icons/bi";
const Map = () => {
  return (
    <>
      <section className={styles.map_sec}>
        <div className={styles.map_sec_text_box}>
          <h2>Locate Us</h2>
          <p>
            Discover our prime location nestled in the heart of the city, where
            creativity and innovation thrive. We are conveniently situated at
            the crossroads of opportunity, making it easy for you to find us and
            embark on a transformative journey. Visit us today and experience
            our welcoming atmosphere at the intersection of excellence and
            inspiration.
          </p>
          <div className={styles.location}>
            {/* <h2>Company Address:</h2> */}
            <div className={styles.location_text}>
              <BiMap />
              <li> Dar es Salaam street, North Legon,Agbogba</li>
            </div>
            <div className={styles.location_text}>
              <BiWorld />
              <li>Accra,Ghana</li>
            </div>
          </div>
        </div>


        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.2244479494893!2d-0.19666732587421645!3d5.680663994300932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9db15b5c6875%3A0xbf1fbc24f68a91ce!2sMobile%20Web%20Ghana!5e0!3m2!1sen!2sgh!4v1686057972614!5m2!1sen!2sgh"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Map;
