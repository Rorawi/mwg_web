import React, { useState } from "react";
import img1 from "../assets/mwg-swiper1.avif";
import mtn from "../assets/mtnlogo.avif";
import stan from "../assets/standardchartered.avif";
import styles from "../components/carousel.module.css";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ImageSwiper } from "./SwiperComp";
import { Link } from "react-router-dom";

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
              {/* <br /> */}
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
           <Link to="/donate">
           <button
              onClick={() => {
                IsModal(!modal);
              }}
            >
              Make Donations <BsCoin />
            </button>
           </Link>
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

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text) => {
    // Copy logic here
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <form id={styles.contactForm}>
        <h1>Donate</h1>
        <p>
          Fuel innovation and drive positive change in the tech industry through
          your donation.
        </p>

        <br />
        <hr />
        <br />

        <div>
          <div className={styles.accountDetails}>
            {isCopied && (
              <span
                style={{
                  float: "right",
                  boxShadow: "0px 2px 10px  rgba(26, 26, 25, 0.12)",
                  padding: "10px",
                  borderRadius: "5px 10px",
                  width: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "42%",
                  top: "45px",
                  margin: "30px 0",
                  background: "#fff",
                  transition: ".3s",
                }}
                className={styles.copied}
              >
                Copied!
              </span>
            )}
            <div
              className={styles.money_div}
              onClick={() => handleCopy("0244 809 550")}
            >
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
                <div onClick={() => handleCopy("0101010101010101")}>
                  <span>₵ 0101010101010101</span>
                  {/* {isCopied && <span>Copied!</span>} */}
                </div>

                <div onClick={() => handleCopy("0101010101010101")}>
                  <span>$ 0101010101010110</span>
                  {/* {isCopied && <span>Copied!</span>} */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the form */}
        {/* ... */}

        <input
          size="40"
          className={styles.form_control}
          aria-required="true"
          aria-invalid="false"
          placeholder="Your Name"
          value={name}
          type="text"
          name="from_name"
          onChange={(e) => setName(e.target.value)}
          required
        />

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
