import { Navigate, useLocation } from 'react-router'
import { InfinitySpin } from 'react-loader-spinner'
import useUser from '../hooks/useUser/useUser'

const PrivateRoute = ({ children }) => {
  const [isUser,refetch,isUserLoading] = useUser()
  const location = useLocation()
  if (isUserLoading) {
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

  if (isUser) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
