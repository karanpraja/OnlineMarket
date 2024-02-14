import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "../Stripe.css";
import { useSelector } from "react-redux";
import { selectOrderStatus } from "../features/Order/OrderSlice";
import { serverjsx } from "..";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51OdmoiSB02QNHAyRQrnmjFBrQRS7rzBpHRvu4XhbOQF4WVP96X9yXCatuDXrYuKYSDWfOl0G02IahC71ndQTVkfp00HJ1MpBIc");

 const 
 Stripe=()=> {

  const [clientSecret, setClientSecret] = useState("");
  const OrderByUser=useSelector(selectOrderStatus)
console.log({OrderByUser:OrderByUser})
  useEffect( () => {
    // Create PaymentIntent as soon as the page loads
     fetch(`${serverjsx}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount: OrderByUser.totalAmount,id:OrderByUser.id ,quantity:OrderByUser.quantity}),
    }).then((res)=>(res.json()))
    .then((data)=>(setClientSecret(data.clientSecret)))
      
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
console.log(clientSecret)
  return (
    <div className="Stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} >
          <CheckoutForm clientSecret={clientSecret}/>
        </Elements>
      )}
    </div>
  );
}
export default Stripe;

// import React, { useState, useEffect } from "react";
// import "../Stripe.css";

// const ProductDisplay = () => (

//   <section>
//     <div className="product">
//       <img
//         src="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <div className="description">
//       <h3>Stubborn Attachments</h3>
//       <h5>$20.00</h5>
//       </div>
//     </div>
//     <form  action="http://localhost:3000/stripecheckout/create-payment-intent" method="POST" >
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
// );

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function Stripe() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? (
//     <Message message={message} />
//   ) : (
//     <ProductDisplay />
//   );
// }