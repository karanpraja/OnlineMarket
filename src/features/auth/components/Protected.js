import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectUser } from "../AuthSlice"

const Protected=({children})=>{
const user=useSelector(selectUser)
if(!user){
    <Navigate to='/'></Navigate>
}
return(children)

}
export default Protected