import { Navigate,Outlet } from "react-router";

function PrivateRoute(props)
{
       return props.isLogged?<Outlet/>:<Navigate to="/"/>;

}
export default PrivateRoute;
