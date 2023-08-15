import { useEffect, useState } from "react";
import axios from "axios";
import PaystackPop from "@paystack/inline-js";

function Payment() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  //   const payWithPaystack = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post('/api/payments', {
  //         email,
  //         amount,
  //         firstName,
  //         lastName,
  //       });

  //       const paymentData = response.data.payment;

  //       const paystack = new PaystackPop();
  //       paystack.newTransaction({
  //         key: 'pk_test_de9b93599c675d18a6a2821698bc38bff286d174',
  //         amount: paymentData.amount * 100,
  //         email: paymentData.email,
  //         firstName: paymentData.firstName,
  //         lastName: paymentData.lastName,
  //         ref: paymentData.reference, // Use the reference from the backend
  //         onClose: () => {
  //           // Handle closure of Paystack payment form
  //           console.log('Payment form closed');
  //         },
  //         callback: (response) => {
  //           // Handle successful payment response
  //           console.log('Payment successful', response);

  //           // You can perform additional actions here, such as updating the payment status
  //         },
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const paywithpaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_de9b93599c675d18a6a2821698bc38bff286d174",
      amount: amount * 100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `Payment Complete Reference ${transaction.reference}`;
        alert(message);
        setEmail("");
        setAmount("");
        setFirstname("");
        setLastname("");
      },
      onCancel() {
        alert("You have cancelled the transaction");
      },
    });
  };
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>I'm about to integrate paystack.</h1>
        <form id="paymentForm">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              id="email-address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <br />

          <div className="form-group">
            <label>Amount</label>
            <input
              type="tel"
              value={amount}
              id="amount"
              required
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <br />
          <br />

          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              id="first-name"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <br />
          <br />

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              id="last-name"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <br />
          <br />

          <div className="form-submit">
            <button
              type="submit"
              onClick={paywithpaystack}
              // onClick={payWithPaystack}
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Payment;
