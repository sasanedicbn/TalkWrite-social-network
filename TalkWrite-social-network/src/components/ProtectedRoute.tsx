import { Navigate } from 'react-router-dom';
import { UserApi } from '../api/UserApi';
import { UserPosts } from '../api/UserPosts';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import { getPosts } from '../store/postsSlice';
import { useEffect, useState } from 'react';
import { ProtectedRouteProps } from '../types/postsType';

const ProtectedRoute = ({ children }:ProtectedRouteProps) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('jwt');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          const userData = await UserApi();
          const userPosts = await UserPosts();
          dispatch(setUser(userData));
          dispatch(getPosts(userPosts));
        }
      } catch (error) {
        console.error('error', error);
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
