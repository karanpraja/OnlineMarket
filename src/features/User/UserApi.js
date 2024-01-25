import { serverjsx } from "../.."

export function fetchLoggedInUserData(userId){

  return new Promise(async(resolve,reject)=>{
const response=await fetch(`${serverjsx}/users/`+userId)
const data=await response.json()
resolve({data})
    })
}

export function fetchUpdateLoggedInUserData(user){
    const userId=user.id
    return new Promise(async(resolve,reject)=>{
const response=await fetch(`${serverjsx}/users/`+userId,{
    method:'PATCH',
    body:JSON.stringify(user),
    headers:{
        "Content-Type":"application/json"
    }
    
})
const data=await response.json();
resolve({data})

    })
}