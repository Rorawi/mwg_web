import React, { useState } from "react";
import img1 from "../assets/mwg-swiper1.jpg";
import styles from "../components/carousel.module.css";
import { FaArrowRight, FaTimes } from "react-icons/fa";

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
              <h1>
                {" "}
                <span>{text}</span>
                <Cursor cursorColor="#f9af1a" />
              </h1>
            </div>
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
              Make Donations <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {modal ? (
           <div className={styles.modal_div_screen}>
           <FaTimes onClick={() => {
                   IsModal(!modal);
                 }}/>
            <div className={styles.modal_div}>
              <Form/>
              </div>
              </div>
      ) : (
        false
      )}
    </div>
  );
}



const Form =()=> {

  const [modal, IsModal] = useState(true);

  /*Form states */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");
  const [sentmessage,setSentMessage] = useState(false)
  return(
    <>
  
         <form id="contactForm">
          <h1>Donate</h1>

          <p>
          Join us in powering innovation and shaping the future by contributing to our mission. 
          Your donation will fuel technological advancements and drive positive change in the tech industry.
          </p>


          <CurrencyDropdown/>
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

            <input
              type="submit"
              id={styles.submit_btn}
              className={styles.form_control}
              // onClick={sendEmail}
              value="Send"
            />
          </form>
       
    </>
  )
}



const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className={styles.currency_div}>
      <div>
      <label htmlFor="currency">Choose a currency:</label>
      <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange} className={styles.form_control}>
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

