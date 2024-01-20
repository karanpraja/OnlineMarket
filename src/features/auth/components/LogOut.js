import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logoutUserAsync, selectLoggedInUser, selectuser } from "../AuthSlice"
import { Navigate } from "react-router-dom"
import { resetCartItemsAsync } from "../../cart/CartSlice"

const LogOut=()=>{
    const user=useSelector(selectLoggedInUser)
    const dispatch=useDispatch()
    useEffect(()=>{
            console.log(user)
            dispatch(logoutUserAsync(user))
            dispatch(resetCartItemsAsync())
        
          
    },[user])
return(<div>
<Navigate to='/'></Navigate>
</div>)
}
export default LogOut;