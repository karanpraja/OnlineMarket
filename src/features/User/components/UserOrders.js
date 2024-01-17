import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  selectLoggedInUser } from "../../auth/AuthSlice"
import { fetchLoggedInUserDataAsync, fetchLoggedInUserOrdersAsync, selectOrderbyLoggedInUser } from "../UserSlice"
import { selectItems } from "../../cart/CartSlice"

const UserOrders=(props)=>{
  const dispatch=useDispatch()
  const user=useSelector(selectLoggedInUser)
  const orders=useSelector(selectOrderbyLoggedInUser)

  // useEffect(()=>{
  //   console.log('1')
  //       },[dispatch])
    console.log(user)

    
    console.log(orders)
    
return(
              <div className="flex  flex-col overflow-y-scroll overflow-hidden  bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto  overflow-hidden px-4 py-6  sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Items orderd by user</h2>
                   
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {orders&&orders.map((order,index) => (
                                <li key={index} className="grid py-6 ">

                              <>
                              <div className="flex justify-between">
                              <h1>#Order{index}</h1>
                              <h2 >Status:<span className="text-red-400">{order.status}</span></h2>
                              </div>
                             
                              {order.Items.map((item)=>(
                                <>
                              <div className="flex py-6 ">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src={item.imageSrc} alt={item.imageAlt} className="h-full w-full object-cover object-center"/></div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    {item.name}
                                  </h3>
                                  <p className="ml-4">${item.price}</p>
                                </div>
                                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                              </div>
                        
                              
                            </div>
                            </div>

                            <div >
                              
                              {/* {order.user[0].addresses[order.selectedAddress].map((address,index) => ( */}
    
      {/* ))} */}
                              </div>
                              </>
                          ))}
                          </>
                          <div className="grid items-end justify-between text-sm">
                              <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${order.totalAmount}</p>
                  </div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>TotalItems</p>
                    <p>{order.totalItems}</p>
                  </div>

                              </div>
                              <div className="flex justify-between">
  <h2>Shipping Address</h2>
</div>
                          <li key={order.selectedAddress} className="flex justify-between gap-x-6 py-5 p-5 border-2 border-gray-200 m-3">
          <div className="flex min-w-0 gap-x-4 ">
            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={address.imageUrl} alt="" /> */}
            {/* <input  id="name" name="addresses"  type="radio"  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/> */}
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{order.user[0].addresses[order.selectedAddress].fullname}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{order.user[0].addresses[order.selectedAddress].country}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{order.user[0].addresses[order.selectedAddress].city}</p>
            <p className="text-sm leading-6 text-gray-900">{order.user[0].addresses[order.selectedAddress].postalcode}</p>
          </div>
        </li>
                          </li>
                        ))}
                          
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
               
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  </div>
                </div>
              </div>)

}
export default UserOrders;