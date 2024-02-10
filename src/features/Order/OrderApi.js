import { serverjsx } from "../..";

export function OrderItemsbyUser(order){
    return new Promise(async (resolve,reject)=>{
        const response=await fetch(`${serverjsx}/orders`,{
            method:'POST',
            body:JSON.stringify(order),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        
        resolve({data})
        
    })
}

export function resetCart(){
    console.log('resetCart')
    return new Promise(async (resolve,reject)=>{
    console.log('resetCart')
        const response=await fetch(`${serverjsx}/cart/items/id`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const noOfItemsRemoved=await response.json()
        console.log(noOfItemsRemoved)
resolve({data:`All ${noOfItemsRemoved} cart items cleared!`})
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
const response=await fetch(`${serverjsx}/orders/id`)
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