/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Loading from "../Loading/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) return <Loading />
    if (user) {
        return children
    }
    return <Navigate to={"/login"} state={location}></Navigate>
};

export default PrivateRoute;