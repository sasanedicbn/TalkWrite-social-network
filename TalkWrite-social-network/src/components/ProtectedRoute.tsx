import { Navigate } from 'react-router-dom';
import { UserApi } from '../api/UserApi';
import { UserPosts } from '../api/UserPosts';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import { getPosts } from '../store/postsSlice';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('jwt');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          const userData = await UserApi();
          const userPosts = await UserPosts();
          console.log('proteceteduserdata', userData);
          console.log('USRAZ POST', userPosts);
          dispatch(setUser(userData));
          dispatch(getPosts(userPosts));
        }
      } catch (error) {
        console.error('Greška prilikom preuzimanja podataka korisnika:', error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [dispatch, token]);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
