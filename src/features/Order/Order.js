import { useDispatch, useSelector } from "react-redux"
import {  selectOrderStatus } from "./OrderSlice"
import { Link, Navigate} from "react-router-dom"
import { useEffect } from "react"
import { selectUserChecked } from "../auth/AuthSlice"
import { resetCartAsync, selectCartLoaded } from "../cart/CartSlice"
import userEvent from "@testing-library/user-event"

const OrderPage=()=>{
let orderStatus=useSelector(selectOrderStatus)
// const params=useParams()
const dispatch=useDispatch()
// const resetMessage=useSelector(selectOrderStatus)
console.log(orderStatus)
const isCartLoaded=useSelector(selectCartLoaded)
const userChecked=useSelector(selectUserChecked)

useEffect(()=>{
  console.log("handleReset")
  dispatch(resetCartAsync())
},[dispatch])
return(
    <>
{/* {!userChecked&&<Navigate to='/'></Navigate>} */}
 {orderStatus&&<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">Order Status</p>
      {orderStatus&&<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order placed Successfully </h1>}

        {orderStatus&&<p className="mt-6 text-base leading-7 text-gray-600">Your order id is:{orderStatus.id}</p>}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <a href="#" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>}
</>
)
}
export default OrderPage