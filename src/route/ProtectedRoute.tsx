import { useSelector } from "react-redux"
import { currentUser } from "../redux/slice/authSlice"
import { Navigate } from "react-router-dom";
import { routeProps } from "../common/type/types";

const ProtectedRoute:React.FC<routeProps>=(props)=>{
    const {children}=props;
    const currentLoginUser = useSelector(currentUser);

if (!currentLoginUser) {
  return <Navigate to="/" replace />;
}
return children;

}
export default ProtectedRoute;