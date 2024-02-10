// A mock function to mimic making an async request for data
export function createUser(user) {
  return new Promise(async(resolve) =>{
    const response=await fetch('http://localhost:8080/users/signup',{
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

const response=await fetch("http://localhost:8080/users/login",{
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
export function logoutUser() {
  return new Promise(async(resolve,reject) =>{
    const response=await fetch('http://localhost:8080/users/logout')
    const data=await response.json()
    console.log("logout")
  resolve({data:"User logged Out"})
  //how to keep data in resolve
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
}



