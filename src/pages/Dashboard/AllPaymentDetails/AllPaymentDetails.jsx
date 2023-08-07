import React, { useState } from 'react';
import useAllPaymentDetails from '../../../hooks/usePayment/useAllPaymentDetails';
import { Form } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

const AllPaymentDetails = () => {
    const [searchvalue,setSearchvalue] = useState('');
    const [AllPaymentDetails] = useAllPaymentDetails(searchvalue)
    const handleChange =(e)=>{
        setSearchvalue(e.target.value)
    }
      const handleSearch = (e) =>{
        e.preventDefault();
        const value = e.target.searchvalue.value;
        setSearchvalue(value)
      }
    return (
        <div className='w-full p-4 '>
          <Breadcrumb pageName={'Payment History'}></Breadcrumb>
        <div className='text-center mt-5 mb-5'>
        <Form onSubmit={handleSearch}>
        <input onChange={handleChange} type="text" name='searchvalue' placeholder="Type CUET ID to search" className="input input-bordered input-primary w-full max-w-xs" />
        <input type="submit" className='btn btn-outline ml-2' value="Search" />
        </Form>
      </div>

        <p className='text-center mt-10 text-3xl font-bold mb-5'>All Payment History</p>
        <div className="overflow-x-auto">
<table className="table table-xs table-pin-rows table-pin-cols">
<thead>
  <tr className='bg-gray-300 text-black'>
    <td>#</td> 
    <td>User Name</td>
    <td>CUET Id</td> 
    <td>Total Amount</td> 
    <td>Paid</td> 
    <td>Due</td> 
    <td>Date</td>
  </tr>
</thead> 
<tbody>
{
        AllPaymentDetails && AllPaymentDetails.map((item,index)=> <tr key={index}>
            <th>{++index}</th>
            <th>{item.name}</th>
            <th>{item.cuetId}</th>
            <th>{item.total}</th>
            <th>{item.paid}</th>
            <th>{item.due}</th>
            <th>{item.date}</th>
        </tr> )
      }
</tbody> 
</table>

</div>
    </div>
    );
};

export default AllPaymentDetails;