import React, { useState, useEffect } from "react";
// import Circle from "./Circle";
import styles from "../components/payment.module.css"; // Import your styles here
import style from "../components/stepprogress.module.css"; // Import your styles here

function ProgressBar() {
  const [circle] = useState(3);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState();

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
        return <FormStep1 setActive={setActive} />;
      case 1:
        return <FormStep2 setActive={setActive} />;
      case 2:
        return <FormStep3 />;
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
            disabled={active >= circle - 1 ? true : false}
            onClick={() => {
              setActive((prevActive) => Math.min(prevActive + 1, circle - 1));
            }}
          >
            Next
          </button>
        </div>
      </div>

      <div className={style["form-container"]}>{renderForm()}</div>
    </div>
  );
}

export default ProgressBar;




const Circle = ({className,children}) => {
  return (
    <div className={className}>{children}</div>
  )
}

function FormStep1({ setActive }) {
  const [amount, setAmount] = useState(0); // Initialize with 0
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
        <button
          className={styles.next_btn}
          onClick={() => setActive(1)}
          disabled={amount === 0}
        >
          Next
        </button>
      </section>
    </>
  );
}

function FormStep2({ setActive }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1>Form step two</h1>
      <section className={styles.formDiv}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={styles.next_btn}
          onClick={() => setActive(2)}
          disabled={!firstName || !lastName || !email}
        >
          Next
        </button>
      </section>
    </>
  );
}

function FormStep3() {
  return (
    <>
      <h1>Form step three</h1>
      <section className={styles.formDiv}>
        <p>Review your information:</p>
        {/* Display summary of selected amount, name, and email */}
        {/* You can use the context API or Redux to pass the data from previous steps */}
        <button className={styles.submit_btn}>Confirm</button>
      </section>
    </>
  );
}
