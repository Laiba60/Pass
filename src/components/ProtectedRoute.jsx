import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("Checking token in ProtectedRoute:", token);
 
  if (!token) {
    return <Navigate to="/auth/logon" replace />;
  }
  else 
 

  return children;
  
};

export default ProtectedRoute;
