import React, { useState, useEffect } from "react";
import styles from "../components/payment.module.css"; // Import your styles here
import style from "../components/stepprogress.module.css"; // Import your styles here

/*Payment form imports */
import axios from "axios";
import PaystackPop from "@paystack/inline-js";
import img1 from "../assets/phone.avif";
import { BsCashCoin } from "react-icons/bs";
import { BiRename, BiMailSend } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";

function ProgressBar() {
  const [circle] = useState(3);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState();
  const [amount, setAmount] = useState(0); // Initialize with 0
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleNextClick = () => {
    if (!firstName || !lastName || !email ||!amount) {
      // Show an alert or warning message
      alert("Please fill in all required fields.");
    } else {
      // Proceed to the next step
      setActive(active);
    }
  };


  useEffect(() => {
    setWidth((100 / (circle - 1)) * active);
  }, [circle, active]);

  const arr = [];

  for (let i = 0; i < circle; i++) {
    arr.push(
      <Circle
        className={`${style.circle} ${i <= active ? style.active : ""}`}
        key={i}
      >
        {i}
      </Circle>
    );
  }

  const renderForm = () => {
    switch (active) {
      case 0:
        return (
          <FormStep1
            amount={amount}
            setAmount={setAmount}
            setActive={setActive}
          />
        );
      case 1:
        return (
          <FormStep2
            firstName={firstName}
            lastName={lastName}
            email={email}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setActive={setActive}
          />
        );
      case 2:
        return (
          <FormStep3
            amount={amount}
            firstName={firstName}
            lastName={lastName}
            email={email}
            onConfirm={() => {
              /* Implement logic for confirmation */
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.progressbar}>
          <div
            className={`${style.progress}`}
            style={{ width: `${width}%` }}
          ></div>
          {arr}
        </div>
        <div className={style["form-container"]}>{renderForm()}</div>

        <div className={style.button}>
          <button
            className={`${style.prev} ${style.btn}`}
            disabled={active > 0 ? false : true}
            onClick={() => {
              setActive((prevActive) => Math.max(prevActive - 1, 0));
            }}
          >
            Prev
          </button>
          <button
            className={`${style.next} ${style.btn}`}
            disabled={[!firstName || !lastName || !email, active >= circle - 1].every(Boolean)}
            onClick={() => {
              // handleNextClick
              setActive((prevActive) => Math.min(prevActive + 1, circle - 1));
            }}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProgressBar;

const Circle = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

function FormStep1({ amount, setAmount, setActive }) {
  const amounts = [20, 40, 60, 100];

  return (
    <>
      <h1>Form step one</h1>
      <section className={styles.formDiv}>
        <div className={styles.amount_buttons}>
          {amounts.map((amt) => (
            <button
              key={amt}
              className={styles.amount_button}
              onClick={() => setAmount(amt)}
              disabled={amount === amt}
            >
              {amt}
            </button>
          ))}
        </div>
        {/* <button
          className={styles.next_btn}
          onClick={() => setActive(1)}
          disabled={amount === 0}
        >
          Next
        </button> */}
      </section>
    </>
  );
}

function FormStep2({
  firstName,
  lastName,
  email,
  setFirstName,
  setLastName,
  setEmail,
  setActive,
}) {
  return (
    <>
      <h1>Form step two</h1>
      <section className={styles.formDiv}>
        <input
          size="40"
          className={styles.form_control}
          aria-required="true"
          aria-invalid="false"
          placeholder="Your First Name"
          value={firstName}
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          size="40"
          className={styles.form_control}
          aria-required="true"
          aria-invalid="false"
          placeholder="Your Last Name"
          value={lastName}
          type="text"
          onChange={(e) => setLastName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* <button
          className={styles.next_btn}
          onClick={() => setActive(2)}
          disabled={!firstName || !lastName || !email}
        >
          Next
        </button> */}
      </section>
    </>
  );
}

function FormStep3({ amount, firstName, lastName, email, onConfirm }) {
  const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

const paywithpaystack = (e) => {
  e.preventDefault();
  const paystack = new PaystackPop();
  paystack.newTransaction({
    key: publicKey,
    amount: amount * 100,
    email,
    firstName,
    lastName,
    ref,
    onSuccess(transaction) {
      let message = `Payment Complete Reference ${transaction.reference}`;
      alert(message);
    },
    onCancel() {
      alert("You have cancelled the transaction");
    },
  });
};

  return (
    <>
      <h1>Form step three</h1>
      <section className={styles.formDiv}>
        <p>Review your information:</p>
        <p>Amount: {amount}</p>
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>Email: {email}</p>
        <button className={styles.submit_btn} onClick={paywithpaystack}>
          Donate {amount}
        </button>
      </section>
    </>
  );
}
