import React, { useState } from "react";
import img1 from "../assets/mwg-swiper1.jpg";
import mtn from "../assets/mtnlogo.png";
import stan from "../assets/Stan.png";
import styles from "../components/carousel.module.css";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ImageSwiper } from "./SwiperComp";

export default function Hero() {
  /*Modal States */
  const [modal, IsModal] = useState(false);

  const [text] = useTypewriter({
    words: [
      "Technology hubs",
      "Data Science",
      "IT consultancy",
      "Startup incubation and mentorship",
      "Girls in ICT",
    ],
    loop: 0 | false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div>
      <div className={styles.image_container}>
        <img src={img1} alt="Image" className={styles.image} />
        {/* <ImageSwiper /> */}
        <div className={styles.text_overlay}>
          <div className={styles.glass_effect}>
            <div className={styles.text}>
              <h3>WE OFFER</h3>
              <br />
              <h1>
                {" "}
                <span className={styles.typing_text}>{text}</span>
                <Cursor cursorColor="#f9af1a" />
              </h1>
            </div>
            <br />
            <p>
              Mobile Web Ghana is a technology and entrepreneurship hub that is
              dedicated to empowering the youth to develop mobile and web
              applications and open data solutions to solve local problems.
            </p>
            <button
              onClick={() => {
                IsModal(!modal);
              }}
            >
              Make Donations <BsCoin />
            </button>
          </div>
        </div>
      </div>

      {modal ? (
        <div className={styles.modal_div_screen}>
          <div className={styles.svg_div}>
            <FaTimes
              onClick={() => {
                IsModal(!modal);
              }}
            />
          </div>
          <div className={styles.modal_div}>
            <Form />
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
}

const Form = () => {
  const [modal, IsModal] = useState(false);

  /*Form states */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");
  const [sentmessage, setSentMessage] = useState(false);
  return (
    <>
      <form id="contactForm">
        <h1>Donate</h1>

        <p>
          Join us in powering innovation and shaping the future by contributing
          to our mission. Your donation will fuel technological advancements and
          drive positive change in the tech industry.
        </p>

        {/* <div className={styles.svg_div}>
          <FaTimes onClick={() => {
                   IsModal(modal);
                   console.log("ji");
                 }}/>
          </div> */}

        {/* <CurrencyDropdown /> */}
        <div className={styles.twoInone}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Your Name..."
            onChange={(e) => setName(e.target.value)}
            className={styles.form_control}
            required
          />

          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            placeholder="Your Lastname..."
            onChange={(e) => setLastname(e.target.value)}
            className={styles.form_control}
            required
          />
        </div>

        <input
          size="40"
          className={styles.form_control}
          aria-required="true"
          aria-invalid="false"
          placeholder="Your Email"
          value={email}
          type="email"
          name="from_email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div>
          <div className={styles.accountDetails}>
            <div className={styles.money_div}>
              <div className={styles.img_div}>
                <img src={mtn} />
              </div>

              <h2>0244 809 550</h2>
            </div>

            <div className={styles.money_div}>
              <div className={styles.img_div}>
                <img src={stan} />
              </div>

              <div>
                <div><span>Cedis</span> </div>
                <div>Talika +233 55 312 4613</div>
              </div>
            </div>
          </div>
        </div>

        <input
          type="submit"
          id={styles.submit_btn}
          className={styles.form_control}
          // onClick={sendEmail}
          value="Send"
        />
      </form>
    </>
  );
};

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className={styles.currency_div}>
      <div>
        <label htmlFor="currency">Choose a currency:</label>
        <select
          id="currency"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          className={styles.form_control}
        >
          <option value="">Select a currency</option>
          <option value="GH₵">GHS - Ghana Cedis</option>
          <option value="$">USD - United States Dollar</option>
          <option value="€">EUR - Euro</option>
          <option value="£">GBP - British Pound Sterling</option>
          <option value="¥">JPY - Japanese Yen</option>
          {/* Add more currency options as needed */}
        </select>
      </div>
      {selectedCurrency && <p>Selected currency: {selectedCurrency}</p>}
    </div>
  );
};
