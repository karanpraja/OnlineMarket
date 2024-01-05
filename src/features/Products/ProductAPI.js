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
  for(let key in filter)
  {
    queryString+=`${key}=${filter[key]}&`
  }
  // console.log(queryString)
  return new Promise(async(resolve) =>{
    const response=await fetch('http://localhost:8080/products?'+queryString)
    const data=await response.json()
    resolve({data})//how to keep data in resolve
        
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function fetchProductsbySort(sort) {
  let queryString=''
  
    queryString+=`_sort=${sort}&_order=asc&`
  
  // console.log(queryString)
  return new Promise(async(resolve) =>{
    const response=await fetch('http://localhost:8080/products?'+queryString)
    const data=await response.json()
    resolve({data})//how to keep data in resolve
        
  }
    // setTimeout(() => resolve({ data: amount }), 500)
  );
}
