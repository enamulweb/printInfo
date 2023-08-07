import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useUser from '../hooks/useUser/useUser';

const DashBoardLayout = () => {
    const {user,logOut} = useContext(AuthContext)
    const [isUser,refetch] = useUser();
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col relative">
            <label htmlFor="my-drawer-2" className="btn btn-error absolute top-5 right-5  drawer-button lg:hidden">Open</label>
            {/* Page content here */}
            <Outlet/>
        
        </div> 
        <div className="drawer-side z-20">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {
        (isUser && user?.emailVerified && isUser.role == 'user') && <>
            <li ><NavLink to='/'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>Home</NavLink></li>
            <li><NavLink to='/dashboard/profile' className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>Profile</NavLink></li>
            <li ><NavLink to='/dashboard/userpaymentinfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>User Payment Info</NavLink></li>
            <li ><NavLink to='/dashboard/userprintinfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>User Print Info</NavLink></li>
            </>

            }
            {
        (isUser && user?.emailVerified && isUser.role == 'moderate') && <>
            <li ><NavLink to='/'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>Home</NavLink></li>
            <li><NavLink to='/dashboard/profile' className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>Profile</NavLink></li>
            <li ><NavLink to='/dashboard/userpaymentinfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>User Payment Info</NavLink></li>
            <li ><NavLink to='/dashboard/userprintinfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>User Print Info</NavLink></li>
            </>

            }
            {
                (isUser && user?.emailVerified && isUser.role == 'admin') && <>
                <li ><NavLink to='/'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>Home</NavLink></li>
            <li><NavLink to='/dashboard/profile' className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>Profile</NavLink></li>
            <li><NavLink to='/dashboard/allusers' className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>All Users</NavLink></li>
            <li ><NavLink to='/dashboard/allprintinginfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>All Printing Info</NavLink></li>
            <li ><NavLink to='/dashboard/allpaymentinfo'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>All Payment Info</NavLink></li>
            <li ><NavLink to='/dashboard/paymenthistory'className={({ isActive }) => (isActive ? 'active mb-2' : 'default mb-2')}>All payment history</NavLink></li>
                </>
            }
            
            </ul>
        
        </div>
        </div>
    );
};

export default DashBoardLayout;