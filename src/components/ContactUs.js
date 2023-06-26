import React, { useState } from "react";
import styles from "../components/contact.module.css";
import img1 from "../assets/mwg-swiper1.jpg";
import { BiMailSend, BiPhoneCall, BiWorld } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";
import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-skill-icons/instagram";

import Map from "./Map";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sentmessage,setSentMessage] = useState(false)

  // const submit = (e) => {
  //   e.preventDefault();
  //   console.log(name, email, phone, message);
  //   setName("");
  //   setEmail("");
  //   setPhone("");
  //   setMessage("");
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm("service_ibep18s", "template_lxxs1s8", form, "UX2qzirfmkrZ_N-CG")
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setSentMessage(!sentmessage)
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    form.reset();

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  
  
  
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Contact Us</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>
      <div className={styles.contact_container}>
        <div className={styles.contact_details}>
          <h2>// Our Projects</h2>
          <h1>Contact Us</h1>

          <p>
            Feel free to contact us via phone or visit our office at any time.
            Our dedicated team strives to respond to all inquiries within 24
            hours during business days. We are here to assist you and provide
            answers to your questions.
          </p>

          <div className={styles.svgS}>
            <div className={styles.svgS_div}>
              <BiWorld />
              <div className={styles.text_box}>
                <h1>Our Address</h1>
                <span>Dar es Salaam street, North Legon,Agbogba</span>
              </div>
            </div>

            <div className={styles.svgS_div}>
              <BiPhoneCall />
              <div className={styles.text_box}>
                <h1>Our Phone</h1>
                <span>+233 2677 77887</span>
              </div>
            </div>

            
            <div className={styles.svgS_div}>
              <BiMailSend />
              <div className={styles.text_box}>
                <h1>Our Mail</h1>
                <span>info[at]mobilewebghana.org</span>
              </div>
            </div>

            <div className={styles.svgS_div}>
            <FaFacebookSquare className={styles.facebook} />
              <div className={styles.text_box}>
                <h1>Our Facebook</h1>
                <span>https://www.facebook.com/MobileWebGhana/</span>
              </div>
            </div>

            <div className={styles.svgS_div}>
            <Icon icon={instagramIcon} width="40" height="40" />
              <div className={styles.text_box}>
                <h1>Our Instagram</h1>
                <span>https://www.instagram.com/mobilewebgh/</span>
              </div>
            </div>

            <div className={styles.svgS_div}>
            <FaLinkedin className={styles.linkedin} />
              <div className={styles.text_box}>
                <h1>Our Linkedin</h1>
                <span>https://www.linkedin.com/company/mobile-web-ghana/</span>
              </div>
            </div>

            <div className={styles.svgS_div} >
            <FaTwitter className={styles.twitter} />
              <div className={styles.text_box}>
                <h1>Our Twitter</h1>
                <span>https://twitter.com/MobileWebGhana</span>
              </div>
            </div>
           
            


          </div>
        </div>

        <section className={styles.formDiv}>
          <form id="contactForm" onSubmit={sendEmail}>
            <div className={styles.contact_details}>
              <h2>Get in touch with us today! </h2>
              <h1>We're ready to help you get started.</h1>

              <span>
                We'd love to welcome your suggestions and other questions.<br/>
                 All fields are required.
              </span>
            </div>
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
              size="40"
              className={styles.form_control}
              aria-required="true"
              aria-invalid="false"
              placeholder="Phone Number"
              value={phone}
              type="text"
              name="from_phone"
              onChange={(e) => setPhone(e.target.value)}
              required

            />
            <textarea
              cols="40"
              rows="10"
              className={styles.form_control}
              aria-invalid="false"
              name="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required

            ></textarea>

            <input
              type="submit"
              id={styles.submit_btn}
              className={styles.form_control}
              // onClick={sendEmail}
              value="Send"
            />
          </form>
        </section>
      </div>
      <Map />
    </>
  );
}

export default ContactUs;
