import { serverjsx } from "../..";


// A mock function to mimic making an async request for data
export function addToCart(product) {
  console.log(serverjsx)
  return new Promise(async(resolve) =>{
    const response=await fetch(`${serverjsx}/cart`,{
      method:"POST",
      body:JSON.stringify(product),
      headers:{
        'content-type': 'application/json'      }
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
  // export function updateCartItem(user) {
  //   return new Promise(async(resolve) =>{
  //     const response=await fetch(`http://localhost:8080/cart?user=${user}`,{
  //       method:"PATCH",
  //       body:JSON.stringify(user),
  //       headers:{
  //         "Content-Type":"application/json"
  //       }
  //     })
  //     const data=await response.json()
  //     resolve({data})//how to keep data in resolve
  //   });}

export function updateCart(item) {
  console.log(serverjsx)
  console.log("updateCart")
  console.log(item)
  return new Promise(async(resolve) =>{
    const response=await fetch(`${serverjsx}/cart/${item.id}`,{
      method:"PATCH",
      body:JSON.stringify(item),
      headers:{
        'content-type': 'application/json'
      }
    })
    const data=await response.json()
    resolve({data})//how to keep data in resolve
  });}

  

  export function updateCartUser(data1) {
    console.log(data1)
    return new Promise(async(resolve) =>{
      const response=await fetch(`${serverjsx}/users/${data1.user[0].id}`,{
        method:"PATCH",
        body:JSON.stringify(data1.addresses),
        headers:{
          'content-type': 'application/json'
        }
      })
      const data=await response.json()
      resolve({data})//how to keep data in resolve
    });}
  
export function deleteItemFromCart(id) {
  return new Promise(async(resolve) =>{
    const response=await fetch(`${serverjsx}/cart/${id}`,{
      method:"DELETE",
      headers:{
        'content-type': 'application/json'
      }
    })
    // const data=await response.json()
    resolve({data:{id:id}})//how to keep data in resolve
  });}

  

