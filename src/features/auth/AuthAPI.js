// A mock function to mimic making an async request for data
export function fetchUserData(user) {
  return new Promise(async(resolve) =>{
    const response=await fetch('http://localhost:8080/users',{
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
export function fetchLoggedInUserData(user) {
  const email=user.email
  const password=user.password
  return new Promise(async(resolve,rejected) =>{
    const response=await fetch('http://localhost:8080/users?email='+email)
    const data=await response.json()
    console.log(data)
    if(data.email){
if(data.password==password){
resolve({data})
}else{
rejected({message:"wrong password"})
}
    }else{
      rejected({message:"Wrong credentials"})
    }
  //how to keep data in resolve
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
}

