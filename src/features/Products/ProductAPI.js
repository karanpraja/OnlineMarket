// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    const response=await fetch('http://localhost:8080/products')
    const data=await response.json()
    resolve({data})//how to keep data in resolve
        
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchProductsbyFilter(filter) {
  let queryString=''
  // if(data.filter!=null){
    // const filter=data.filter
  for(let key in filter)
  {
    queryString+=`${key}=${filter[key]}&`
  }
// }else{
    // queryString+=`sort=${data._sort}&${data._order}&`}
  // console.log(queryString)
  return new Promise(async(resolve) =>{
    const response=await fetch('http://localhost:8080/products?'+queryString)
    const data=await response.json()
    resolve({data})//how to keep data in resolve
        
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
}

// export function fetchProductsbySort(option) {
//   let queryString=''
  
//     queryString+=`_sort=${option._sort}&_order=${option._order}&`
//     console.log
  
//   // console.log(queryString)
//   return new Promise(async(resolve) =>{
//     const response=await fetch('http://localhost:8080/products?'+queryString)
//     const data=await response.json()
//     resolve({data})//how to keep data in resolve
        
//   }
//   );
// }
