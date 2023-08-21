import React, { useState, useEffect } from "react";
import styles from "../components/donateBtn.module.css"; // Check the path
import { Link } from "react-router-dom";
import { BsCoin } from "react-icons/bs";

const DonateBtn = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    setShow(scrollPosition)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {show ? (
        <div>
          <Link to="/donate">
            <button className={styles.floatbtn}>
              Donate <BsCoin />
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DonateBtn;
