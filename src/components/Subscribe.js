import React, { useState } from "react";
import styles from "../components/subscribe.module.css";
import { CiMail } from "react-icons/ci";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}

      <div className={styles.subscribe_container}>
        <div className={styles.logo_div}>
          <CiMail />
        </div>
        <h2 className={styles.subscribe}>GET UPDATES FROM MOBILE WEB GHANA</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.twoInone}>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Your Name..."
              onChange={(e) => setName(e.target.value)}
              required
              
            />

            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              placeholder="Your Lastname..."
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Your Email..."
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" id={styles.subscribe_button}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
