import { useDispatch } from "react-redux";
import { serverjsx } from "../..";
import { deleteItemFromCart, fetchCartItemsByUserId } from "../cart/CartAPI";
import { deleteItemFromCartAsync, fetchCartItemsByUserIdAsync } from "../cart/CartSlice";

export function OrderItemsbyUser(order){
    return new Promise(async (resolve,reject)=>{
        const response=await fetch(`${serverjsx}/orders`,{
            method:'POST',
            body:JSON.stringify(order),
            headers:{
                'Content-Type':'application/json'
            }
        })
        resolve({data:"Order placed successfully!!"})
        
    })
}

export function resetCart(id){
    console.log('resetCart')
    return new Promise(async (resolve,reject)=>{
    console.log('resetCart')

        const response1=await fetchCartItemsByUserId(id)
        // const data=await response.json()
        // console.log(data)
        console.log(response1)
        const items=response1.data
        console.log(items)

for(let item of items ){
    console.log(item)
await deleteItemFromCart(item.id)

}
resolve({data:"All cart items cleared!"})
reject({data:"Opertion failed"})
        
        
    })
}
// A mock function to mimic making an async request for data

export function  fetchAllOrders({sort,pagination}) {///\
    //filter=['category':{'smartphones','laptops'}]
  
    let queryString=''
    
    // for(let key in filter)
    // {
    //   const category=filter[key]
    //   if(category.length){
    //   const lastCategoryValue=category[category.length-1]
  
    //   console.log(lastCategoryValue+"lkjkl")
    //   queryString+=`${key}=${lastCategoryValue}&`
    //   }
    // }
    for(let key in sort)
    {
    queryString+=`${key}=${sort[key]}&`
    }
    for(let key in pagination)
    {
      queryString+=`${key}=${pagination[key]}`
    }
  
  
    return new Promise(async(resolve) =>{
      const response=await fetch('http://localhost:8080/orders?'+queryString)
      const data=await response.json()
      const totalOrders= await response.headers.get('X-Total-Count')
      resolve({data:{Orders:data,totalOrders:+totalOrders}})//how to keep data in resolve
          
    }
      // setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  export function fetchLoggedInUserOrders(userId){
    return new Promise(async(resolve)=>{
const response=await fetch(`${serverjsx}/orders?user=`+userId)
const data=await response.json()
resolve({data})
    })
}
  

export function UpdateOrders(order){
    return new Promise(async (resolve,reject)=>{
        const response=await fetch(`${serverjsx}/orders/`+order.id,{
            method:'PATCH',
            body:JSON.stringify({status:order.status}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        console.log(data)
        resolve({data})
        
    })
}