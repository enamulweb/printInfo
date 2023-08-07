import React from 'react';
import useManageUser from '../../../hooks/ManageUser/useManageUser';
import AvaterImg from './../../../assets/images/placeholder.jpg';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

const Users = () => {
    const [AllUsers] = useManageUser()
    return (
        <div>
          <Breadcrumb pageName={'All Users'}></Breadcrumb>
            <p className='text-center font-bold text-3xl mt-10'>All User Information</p>
            <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-gray-300 text-black'>
        <th>Name</th>
        <th>CUET ID</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {
        AllUsers && AllUsers.map((item,index)=> <tr key={index}>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.photourl ? item.photourl : AvaterImg} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-error badge-lg">{item.cuetId}</span>
        </td>
        <td>{item.email}</td>
        <th>
          <button className="">{item.phone}</button>
        </th>
      </tr>)
      }
      </tbody>
    
  </table>
</div>
            
        </div>
    );
};

export default Users;