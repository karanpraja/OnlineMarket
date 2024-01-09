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
  return new Promise(async(resolve,reject) =>{
    const response=await fetch('http://localhost:8080/users?email='+email)
    const data=await response.json()
    console.log(data)
    console.log(data[0].password)
    if(data[0].email){
         if(data[0].password==password){
        resolve({data})
         }else{
        reject({message:"wrong password"})
         }
    }else{
      reject({message:"Wrong credentials"})
    }
  //how to keep data in resolve
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
}

