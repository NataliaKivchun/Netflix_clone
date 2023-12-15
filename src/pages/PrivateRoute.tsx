import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../hooks/useRedux"

export const PrivateRoute = () => {
    const authorization = useAppSelector(state => state.auth.authorization)
    const location = useLocation()
   
    return authorization ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
   }