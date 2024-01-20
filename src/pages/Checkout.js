import { Link, Navigate, useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import {  selectItems, updateCartUserAsync } from "../features/cart/CartSlice"
import { loginUserAsync, selectLoggedInUser } from "../features/auth/AuthSlice"
import { useEffect, useState } from "react"
import { OrderItemsbyUserAsync, selectOrderStatus } from "../features/Order/OrderSlice"

const CheckoutPage=()=>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch=useDispatch()
  const user=useSelector(selectLoggedInUser)
  const Items=useSelector(selectItems)
    const totalItems=Items&&Items.reduce((total,item)=>item.quantity+total,0)
    const totalAmount=Items&&Items.reduce((amount,item)=>item.quantity*item.price+amount,0)
   const [paymentMethod,setPaymentMethod]=useState('cash')
   const [selectedAddress,setSelectedAddress]=useState(null)
   const addresses=user[0].addresses
   console.log(addresses)
   console.log(user)

  
    const updateUser=(data)=>{
      console.log(data)
      console.log(user[0])
      if(user[0].addresses){
        const addresses=[...user[0].addresses,data]//FOR ARRAY 
        dispatch(updateCartUserAsync({user:user,addresses:{addresses:addresses}}))
        console.log(user[0].addresses)
        
      }else{ 
          dispatch(updateCartUserAsync({...user[0],addresses:[data]}))
      }
      dispatch(loginUserAsync({email:'karan3@gmail.com',password:'Prajapat@2003'}))

    }
    const handleAddress=(e,index)=>{
      setSelectedAddress(index)
    }
    const handlePayment=(e)=>{
      setPaymentMethod(e.target.value)
    }
    const handlerOrder=(e)=>{
      console.log('order')
      console.log(user)
      const id=user[0].id
dispatch(OrderItemsbyUserAsync({user,status:"pending",Items,selectedAddress,paymentMethod,totalAmount,totalItems,user:id,addresses:user[0].addresses}))

    }
    const orderStatus=useSelector(selectOrderStatus)
    console.log(orderStatus)
return(
  <>
  {orderStatus&&<Navigate to={`/checkorder/${totalItems}`}></Navigate>}
  {Items<1&&<Navigate to='/'></Navigate>} 
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
      
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5	grid-auto-flow: row">
                <div className="lg:col-span-3 ">
    <form className="mb-10 bg-white mt-12 py-4 px-4" noValidate  onSubmit={handleSubmit(updateUser)}>
      <div className="space-y-12 my-10 ">
        
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 -gray-900 ">Personal Information</h2>
          {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  {...register('fullname',{required:'Please enter full name'})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.fullname&&<p className="text-red-500">{errors.fullname.message}</p>}
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register('email',{required:'Please enter email'})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email&&<p className="text-red-500">{errors.email.message}</p>}

              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  {...register('country',{required:'Please select country'})}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                {errors.country&&<p className="text-red-500">{errors.country.message}</p>}

              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  {...register('streetaddress',{required:'Please enter streetaddress'})}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.streetaddress&&<p className="text-red-500">{errors.streetaddress.message}</p>}

              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  {...register('city',{required:'Please enter city'})}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.city&&<p className="text-red-500">{errors.city.message}</p>}

              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  {...register('region',{required:'Please enter region'})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.region&&<p className="text-red-500">{errors.region.message}</p>}
                
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postalcode"
                  {...register('postalcode',{required:'Please enter postalcode'})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.postalcode&&<p className="text-red-500">{errors.postalcode.message}</p>}

              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Phone No.
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  {...register('phone',{required:'Please enter phone'})}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.phone&&<p className="text-red-500">{errors.phone.message}</p>}

              </div>
            </div>
          </div>


          <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Reset
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add
        </button>
      </div>










        </div>

        <div className="border-b border-gray-900/10 pb-12">
          {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p> */}

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Addresses</legend>
              <div className="mt-6 space-y-6">
                
                {/* <div className="relative flex gap-x-3"> */}
                <ul role="list"  className="mt-3">
      {addresses&&addresses.map((address,index) => (
        <li key={index} className="flex justify-between gap-x-6 py-5 p-5 border-2 border-gray-200 m-3">
          <div className="flex min-w-0 gap-x-4 ">
            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={address.imageUrl} alt="" /> */}
            <input
                    id="name"
                    name="addresses"
                    onChange={e=>handleAddress(e,index)}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{address.fullname}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.country}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{address.city}</p>
            <p className="text-sm leading-6 text-gray-900">{address.postalcode}</p>
            <button
        type="button"
        className="font-medium text-indigo-600 hover:text-indigo-500"
      >
        Remove
      </button>
          </div>
          
        </li>
        
    
      ))}
    </ul>
                
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Methods</legend>
        
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="cash"
                    name="payments"
                    value={paymentMethod}
                    onChange={e=>handlePayment(e)}
                    checked={paymentMethod==='cash'}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="cash" className="block text-sm font-medium leading-6 text-gray-900">
                    Cash
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="online"
                    name="payments"
                    value='online'
                    checked={paymentMethod==='online'}

                    onChange={e=>handlePayment(e)}
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="online" className="block text-sm font-medium leading-6 text-gray-900">
                    Online Payment
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

     
                   </form>
                </div>
                    <div className="lg:col-span-2 ">
                  {/* cart  */}     
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">

              
                <div className="pointer-events-auto w-screen max-w-md 	align-content: flex-end">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900">Checkout Items</h2>
                       
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {Items&&Items.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={item.href}>{item.name}</a>
                                      </h3>
                                      <p className="ml-4">{item.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div>
                                    <p className="text-gray-500">Qty </p>
                                    <select defaultValue={item.quantity}>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>

                                    </select>

                                    </div>

                                 
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalAmount}</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>TotalItems</p>
                        <p>{totalItems}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <div
                        onClick={e=>handlerOrder(e)}
                          // to="checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                         Order and Pay
                        </div>
                      </div>
                       <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        
                      </div>
                    </div>
                  </div>
                </div>
             </div>
            </div>
          </div>
             </div>
            </>
)
}
export default CheckoutPage