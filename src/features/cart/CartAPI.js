import { serverjsx } from "../..";


// A mock function to mimic making an async request for data
export function addToCart(product) {
  console.log(serverjsx)
  return new Promise(async(resolve) =>{
    const response=await fetch(`${serverjsx}/cart`,{
      method:"POST",
      body:JSON.stringify(product),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data=await response.json()
    resolve({data})//how to keep data in resolve
  });}

  export function fetchCartItemsByUserId(user) {
    console.log("fetchCartItemsByUserId")
    return new Promise(async(resolve) =>{
      
      console.log([user,'fetchCartItemsByUserId'])
      const response=await fetch(`${serverjsx}/cart?user=${user}`)
      const data=await response.json()
      resolve({data})//how to keep data in resolve
    });}
  // export function updateCart(product) {
  //   return new Promise(async(resolve) =>{
  //     const response=await fetch(`http://localhost:8080/cart?user.email=${product.user.email}`,{
  //       method:"PATCH",
  //       body:JSON.stringify(product),
  //       headers:{
  //         "Content-Type":"application/json"
  //       }
  //     })
  //     const data=await response.json()
  //     resolve({data})//how to keep data in resolve
  //   });}
