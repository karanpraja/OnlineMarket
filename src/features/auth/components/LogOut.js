import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logoutUserAsync, selectLoggedInUser, selectuser } from "../AuthSlice"
import { Navigate } from "react-router-dom"

const LogOut=()=>{
    const userToken=useSelector(selectLoggedInUser)
    const dispatch=useDispatch()
    useEffect(()=>{
            console.log(userToken)
            dispatch(logoutUserAsync())
    },[userToken])
return(<div>
<Navigate to='/'></Navigate>
</div>)
}
export default LogOut;