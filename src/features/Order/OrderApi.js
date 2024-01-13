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

  

