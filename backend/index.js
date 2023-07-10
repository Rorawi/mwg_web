
const express = require("express");
const app = express();
const { resolve } = require("path");
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-07-10",
});

app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(5000, () =>
  console.log(`Node server listening at http://localhost:5000`)
);


// const express =  require('express')
// const request =  require('request')
// const bodyParser =  require('body-parser')
// const path =  require('path')

// const app = express();


// //Middleware
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));

// app.post('/subscribe', (res,req) => {
//     console.log("hey!");
// })

// app.get("/api",(req,res)=> {
//   res.json({"users":['userOne','userTwo','userThree']})
// })

// const PORT = process.env.PORT || 5000

// app.listen(PORT, console.log("Server is ready!..."))




// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
// const express = require('express');
// const app = express();
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// const YOUR_DOMAIN = 'http://localhost:3000';

// app.post('/create-checkout-session', async (req, res) => {
//   const prices = await stripe.prices.list({
//     lookup_keys: [req.body.lookup_key],
//     expand: ['data.product'],
//   });
//   const session = await stripe.checkout.sessions.create({
//     billing_address_collection: 'auto',
//     line_items: [
//       {
//         price: prices.data[0].id,
//         // For metered billing, do not pass quantity
//         quantity: 1,

//       },
//     ],
//     mode: 'subscription',
//     success_url: `${YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

// app.post('/create-portal-session', async (req, res) => {
//   // For demonstration purposes, we're using the Checkout session to retrieve the customer ID.
//   // Typically this is stored alongside the authenticated user in your database.
//   const { session_id } = req.body;
//   const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

//   // This is the url to which the customer will be redirected when they are done
//   // managing their billing with the portal.
//   const returnUrl = YOUR_DOMAIN;

//   const portalSession = await stripe.billingPortal.sessions.create({
//     customer: checkoutSession.customer,
//     return_url: returnUrl,
//   });

//   res.redirect(303, portalSession.url);
// });

// app.post(
//   '/webhook',
//   express.raw({ type: 'application/json' }),
//   (request, response) => {
//     let event = request.body;
//     // Replace this endpoint secret with your endpoint's unique secret
//     // If you are testing with the CLI, find the secret by running 'stripe listen'
//     // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
//     // at https://dashboard.stripe.com/webhooks
//     const endpointSecret = 'whsec_12345';
//     // Only verify the event if you have an endpoint secret defined.
//     // Otherwise use the basic event deserialized with JSON.parse
//     if (endpointSecret) {
//       // Get the signature sent by Stripe
//       const signature = request.headers['stripe-signature'];
//       try {
//         event = stripe.webhooks.constructEvent(
//           request.body,
//           signature,
//           endpointSecret
//         );
//       } catch (err) {
//         console.log(`⚠️  Webhook signature verification failed.`, err.message);
//         return response.sendStatus(400);
//       }
//     }
//     let subscription;
//     let status;
//     // Handle the event
//     switch (event.type) {
//       case 'customer.subscription.trial_will_end':
//         subscription = event.data.object;
//         status = subscription.status;
//         console.log(`Subscription status is ${status}.`);
//         // Then define and call a method to handle the subscription trial ending.
//         // handleSubscriptionTrialEnding(subscription);
//         break;
//       case 'customer.subscription.deleted':
//         subscription = event.data.object;
//         status = subscription.status;
//         console.log(`Subscription status is ${status}.`);
//         // Then define and call a method to handle the subscription deleted.
//         // handleSubscriptionDeleted(subscriptionDeleted);
//         break;
//       case 'customer.subscription.created':
//         subscription = event.data.object;
//         status = subscription.status;
//         console.log(`Subscription status is ${status}.`);
//         // Then define and call a method to handle the subscription created.
//         // handleSubscriptionCreated(subscription);
//         break;
//       case 'customer.subscription.updated':
//         subscription = event.data.object;
//         status = subscription.status;
//         console.log(`Subscription status is ${status}.`);
//         // Then define and call a method to handle the subscription update.
//         // handleSubscriptionUpdated(subscription);
//         break;
//       default:
//         // Unexpected event type
//         console.log(`Unhandled event type ${event.type}.`);
//     }
//     // Return a 200 response to acknowledge receipt of the event
//     response.send();
//   }
// );

// app.listen(5000, () => console.log('Running on port 5000'));