import { Navigate } from 'react-router-dom';
import { UserApi } from '../api/UserApi';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('jwt');
  
  if (!token) {
    return <Navigate to="/" replace />;
  } else{
    UserApi()
  }

  return children;
};

export default ProtectedRoute;
