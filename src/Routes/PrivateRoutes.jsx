import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (user?.email) {
    return children;
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center h-96'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#ff3811]'></div>
      </div>
    );
  }

  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
