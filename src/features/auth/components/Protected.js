import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectLoggedInUser } from "../AuthSlice"

const Protected=({children})=>{
const user=useSelector(selectLoggedInUser)
// console.log('Protected')
if(user[0].role){
    if(user[0].role==='admin'){
    <Navigate to='/adminproductlist'></Navigate>
    }
}
if(!user){
    <Navigate to='/login' replace={true}></Navigate>
}
return(children)

}
export default Protected