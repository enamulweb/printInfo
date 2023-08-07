import React, { useContext } from 'react';
import useUser from '../hooks/useUser/useUser';
import { Navigate, useLocation } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { AuthContext } from '../providers/AuthProvider';

const AdminRoute = ({children}) => {
    const {loading} = useContext(AuthContext)
    const [isUser,refetch,isUserLoading] = useUser()
    const location = useLocation()
    if (loading) {
        return <>
        <div className=''>
        <InfinitySpin 
        width='500'
        color="#4fa94d"
        height='500'
        />
        </div>
        </>
    }
    if (isUser.role == 'admin') {
        return children
      }
      return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;