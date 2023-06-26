import React, { useState, useEffect } from "react";
import mwgLogo from "../assets/mwg-logo.png";
import styles from "../components/navbar.module.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setShow(!show);
  };

  return (
    <header
      className={`${styles.fixedHeader} ${
        scrolled ? styles.scrolledHeader : ""
      }`}
    >
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navbar_brand}>
          <img src={mwgLogo} alt="MWG Logo" />
        </Link>

        <div className={styles.menu_btn} onClick={toggleNav}>
          {/* {show ?  */}
          {/* :  */}
          <AiOutlineMenu className={styles.menu_btn_svg} />
          {/* // } */}
        </div>

        <ul
          className={`${styles.navbar_links} ${
            show ? styles.navbar_active : styles.navbar_links
          }`}
        >
          <div className={styles.menu_btn}>
            <FaTimes className={styles.menu_btn_svg} onClick={toggleNav} />
          </div>
          <li onClick={toggleNav}>
            <Link to="/">Home</Link>
          </li>
          <li>
          {/* <Link to="/about"> */}
          <div
              className={styles.dropdownItem}
              // onMouseEnter={toggleDropdown}
              onClick={toggleDropdown} // Uncomment this line if you also want the dropdown to toggle on click
            >
              About Us
              <div
                // className={
                //   showDropdown
                //     ? styles.dropdownContentVisible
                //     : styles.dropdownContent
                // }
              >
                <ul
                  className={
                    showDropdown
                      ? styles.dropdownContentVisible
                      : styles.dropdownContent
                  }
                >
                  <li onClick={toggleNav}>
                    <a href="/overview">OverView</a>
                  </li>
                  <li onClick={toggleNav}>
                    <Link to="/about">About Us</Link>
                  </li>
                  {/* Add more dropdown items as needed */}
                </ul>
              </div>
            </div>
          {/* </Link> */}
          </li>

          <li onClick={toggleNav}>
            <Link to="/services">Our Services</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/project">Projects</Link>
          </li>
          <li onClick={toggleNav}>
            <a href="/event">Events</a>
          </li>
          <li onClick={toggleNav}>
            <Link to="/career">Career</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
