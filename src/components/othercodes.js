
// export default Payment;










// function DonateForm() {
//   const [activeStep, setActiveStep] = useState(0);
//   const steps = ['Select Amount', 'Provide Details', 'Review', 'Complete'];

//   const handleNextStep = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handlePreviousStep = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   return (
//     <div>
//       <h2>Donate Form</h2>
//       <StepProgressBar steps={steps} activeStep={activeStep} />
//       <div className={styles.step-content">
//         {activeStep === 0 && (
//           <div>
//             {/* Step 1 content */}
//             <p>Select the donation amount.</p>
//             <button onClick={handleNextStep}>Next</button>
//           </div>
//         )}
//         {activeStep === 1 && (
//           <div>
//             {/* Step 2 content */}
//             <p>Provide your details.</p>
//             <button onClick={handlePreviousStep}>Previous</button>
//             <button onClick={handleNextStep}>Next</button>
//           </div>
//         )}
//         {/* Add more steps as needed */}
//       </div>
//     </div>
//   );
// }



{
  /* <div className={styles.banner}>
  
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
<div>

</div> */
}
{
  /* 
<div className={styles.form}>
<div className="relative">
<div className={styles.formDiv}>
<form id="paymentForm" className={styles.paymentForm}>
<div className={styles.form_group}>
<label>Email Address
<BiMailSend/>
</label>
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

<div className={styles.form_group}>
<label>Amount
<BsCashCoin/>
</label>
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

<div className={styles.form_group}>
<label>First Name <BiRename /></label>
<input
type="text"
value={firstName}
id="first-name"
onChange={(e) => setFirstname(e.target.value)}
/>
</div>
    <br />
    <br />

    <div className={styles.form_group}>
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
    
    <div className={styles.form_submit}>
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
    </div>
    </div> */
}

    // <div>
    //       <h2>Donate Form</h2>
    //       <StepProgressBar steps={steps} activeStep={activeStep} />
    //       <div className="step-content">
    //         {activeStep === 0 && (
    //           <div>
    //             {/* Step 1 content */}
    //             <p>Select the donation amount.</p>
    //             <button onClick={handleNextStep}>Next</button>
    //           </div>
    //         )}
    //         {activeStep === 1 && (
    //           <div>
    //             {/* Step 2 content */}
    //             <p>Provide your details.</p>
    //             <button onClick={handlePreviousStep}>Previous</button>
    //             <button onClick={handleNextStep}>Next</button>
    //           </div>
    //         )}
    //         {/* Add more steps as needed */}
    //       </div>
    //     </div>


    

    // import { useEffect, useState } from "react";
    // import PaystackPop from "@paystack/inline-js";
    
    // function Payment() {
    //   const [email, setEmail] = useState("");
    //   const [amount, setAmount] = useState("");
    //   const [firstName, setFirstname] = useState("");
    //   const [lastName, setLastname] = useState("");
    
    //   const paywithpaystack = (e) => {
    //     e.preventDefault();
    // const paystack = new PaystackPop()
    // paystack.newTransaction({
    //   key:"pk_test_de9b93599c675d18a6a2821698bc38bff286d174",
    //   amount:amount * 100,
    //   email,
    //   firstName,
    //   lastName,
    //   onSuccess(transaction){
    //     let message = `Payment Complete Reference ${transaction.reference}`
    //     alert(message)
    //     setEmail("");
    //     setAmount("");
    //     setFirstname("");
    //     setLastname("");
    //   } ,
    // onCancel() {
    // alert("You have cancelled the transaction")
    // }
    // })
    //    };
    //   return (
    //     <>
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <div>
    //         <h1>I'm about to integrate paystack.</h1>
    //         <form id="paymentForm">
    //           <div class="form-group">
    //             <label for="email">Email Address</label>
    //             <input
    //               type="email"
    //               value={email}
    //               id="email-address"
    //               required
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //           <br />
    //           <br />
    
    //           <div class="form-group">
    //             <label for="amount">Amount</label>
    //             <input
    //               type="tel"
    //               value={amount}
    //               id="amount"
    //               required
    //               onChange={(e) => setAmount(e.target.value)}
    //             />
    //           </div>
    //           <br />
    //           <br />
    
    //           <div class="form-group">
    //             <label for="first-name">First Name</label>
    //             <input
    //               type="text"
    //               value={firstName}
    //               id="first-name"
    //               onChange={(e) => setFirstname(e.target.value)}
    //             />
    //           </div>
    //           <br />
    //           <br />
    
    //           <div class="form-group">
    //             <label for="last-name">Last Name</label>
    //             <input
    //               type="text"
    //               value={lastName}
    //               id="last-name"
    //               onChange={(e) => setLastname(e.target.value)}
    //             />
    //           </div>
    //           <br />
    //           <br />
    
    //           <div class="form-submit">
    //             <button type="submit" onClick={paywithpaystack}pa>Pay</button>
    //           </div>
    //         </form>
    //       </div>
    //     </>
    //   );
    // }
    
    // export default Payment;