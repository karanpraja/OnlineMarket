import { Link } from "react-router-dom"
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

//
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
//
const people = [
  {
    name: 'Leslie Alexander',
    state: 'Rajasthan',
    city: 'Jaipur',
    Street:
      'Rajput street',
    Pincode: '111007',
    Phone: '8219117164',
  },
  {
    name: 'Michael Foster',
    state: 'Haryana',
    city: 'Panipat',
    Street:
      'Jaat street',
    Pincode: '111008',
    Phone: '8219117163',
  },
  
]
//
const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]

const CheckoutPage=()=>{
return(
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5	grid-auto-flow: row">
                <div className="lg:col-span-3 ">
                   <form className="mb-10 bg-white mt-12 py-4 px-4">
      <div className="space-y-12 my-10 ">
        {/* <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold leading-7 -gray-900 ">Personal Information</h2>
          {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
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
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
      {people.map((person) => (
        <li key={person.state} className="flex justify-between gap-x-6 py-5 p-5 border-2 border-gray-200 m-3">
          <div className="flex min-w-0 gap-x-4 ">
            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
            <input
                    id="name"
                    name="payments"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.state}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.city}</p>
            <p className="text-sm leading-6 text-gray-900">{person.Phone}</p>

            {/* {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )} */}
          </div>
        </li>
      ))}
    </ul>
                  {/* <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div> */}
                {/* </div> */}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Methods</legend>
        
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="cash"
                    name="payments"
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
        {/* <div className="fixed inset-0 overflow-hidden"> */}
          {/* <div className="absolute inset-0 overflow-hidden"> */}
            {/* <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"> */}
        {/* <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> */}

              
                <div className="pointer-events-auto w-screen max-w-md 	align-content: flex-end">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                       
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div>
                                    <p className="text-gray-500">Qty </p>
                                    <select defaultValue={product.quantity}>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>

                                    </select>

                                    </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
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
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link
                          to="checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                         Order and Pay
                        </Link>
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
            // </div>
    // </div> 
)
}
export default CheckoutPage