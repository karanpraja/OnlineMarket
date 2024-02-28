import { serverjsx } from "../..";

// A mock function to mimic making an async request for data
export function createUser(user) {
  return new Promise(async(resolve) =>{
    const response=await fetch(`/users/signup`,{
      method:"POST",
      body:JSON.stringify(user),
      headers:{
      "Content-Type":"application/json"
    }
    })
    const data=await response.json()
    console.log(data)
    resolve({data})//how to keep data in resolve
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
}
export function loginUser(user) {
  return new Promise(async(resolve,reject) =>{
    try{

const response=await fetch(`/users/login`,{
  method:'POST',
  body:JSON.stringify(user),
  headers:{
    'Content-Type':'application/json'
  }
})
if(response.ok){
const data=await response.json()
resolve({data}) 
}else{
  const error= await response.text()
  console.log(error)
  reject(error)
}
    }catch(error){
      console.log(error)
reject(error)
    }})
}
export function checkUser(){
  return new Promise(async(resolve,reject)=>{
try{
    const response=await fetch(`/users/check`)
    if(response.ok){
      const data=await response.json()
resolve({data})

    }else{
      const error=await response.text()
      reject(error)
    }
  }catch(err){
      reject(err)
    }
  })
}
export function logoutUser() {
  return new Promise(async(resolve,reject) =>{
    const response=await fetch(`/users/logout`)
    const data=await response.json()
    console.log("logout")
  resolve(data)
  //how to keep data in resolve
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
}



