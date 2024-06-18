import { Navigate } from 'react-router-dom';
import { UserApi } from '../api/UserApi';
import { UserPosts } from '../api/UserPosts';
import { useDispatch } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('jwt');
  
  if (!token) {
    return <Navigate to="/" replace />;
  } else{
    UserApi()
    UserPosts()
    
  }
//ako nema tokena i juzera userApi()
  return children;
};

export default ProtectedRoute;
// /posts