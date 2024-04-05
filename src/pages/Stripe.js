import { useCallback, useEffect} from "react";
import {  useSelector } from "react-redux"

import {  selectOrderStatus  } from "../features/Order/OrderSlice";
import useRazorpay from "react-razorpay";
import axios from "axios";
import { serverjsx } from "..";

export default function RazorPayTest() {
const orderByUser=useSelector(selectOrderStatus)
console.log(orderByUser)

  const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment = useCallback(async() => {
const {data:{key}}=await axios.get(`${serverjsx}/api/getkey`)
const {data:{order}}=await axios.post(`${serverjsx}/payment/create-payment-intent`,{totalAmount:orderByUser.totalAmount,id:orderByUser.id,quantity:orderByUser.totalItems})
console.log({RazorpayOrder:order})

const options = {
  key,
  amount: order.amount,
  currency: "INR",
  name: `${orderByUser.address?.[0]?.fullname}`,
  description: "Payment",
  order_id: order.id,
  callback_url: `${serverjsx}/payment/paymentVerification`,
  prefill: {
      name: `${orderByUser.address?.[0]?.fullname}`,
      email: `${orderByUser.address?.[0]?.email}`,
      // contact:`${orderByUser.address?.[0]?.phone}`
  },
  
  theme: {
      "color": "#121212"
  }
};

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  useEffect(() => {
    if (isLoaded) {
      handlePayment();
    }
  }, [isLoaded, handlePayment])

  return (
    <div className="App">
      <button onClick={handlePayment}>Click</button>
    </div>
  );
}






























// import React, { useState, useEffect } from "react";
// import { createPaymentIntentAsync, selectOrderStatus, selectlink } from "../features/Order/OrderSlice";
// import { useDispatch, useSelector } from "react-redux";
// import "../Stripe.css";


// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// export default function Stripe() {
//   const [message, setMessage] = useState("");
// const dispatch=useDispatch()
// const link=useSelector(selectlink)
// const orderByUser=useSelector(selectOrderStatus)
// console.log(orderByUser)

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
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log("createPaymentIntent")
// dispatch(createPaymentIntentAsync({totalAmount:orderByUser.totalAmount,id:orderByUser.id,quantity:orderByUser.totalItems}))
//   }
// console.log({link:link})

// if(link){
//   window.location.replace(link);
//   return <>Will redirect in 3 seconds...</>;
// }
// // console.log({link:link})
//   return message ? (
//     <Message message={message} />
//   ) : (
//     <>
//     {/* {link&&<Navigate to={`/${link}`}/>} */}
//       <section className="Stripe">
//     <div className="product">
//       <img
//         src="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <div className="description">
//       <h3>Order Id:${orderByUser.id}</h3>
//       <h5>${orderByUser.totalAmount}</h5>
//       </div>
//     </div>
//     <form onSubmit={handleSubmit}>
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
//   </>
//   );
// }