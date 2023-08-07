import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import usePayment from '../../../hooks/usePayment/usePayment';
import useManageUser from '../../../hooks/ManageUser/useManageUser';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';


const AllPayment = () => {
    const [searchvalue,setSearchvalue] = useState('');
    const [AllPayment,refetch] = usePayment(searchvalue)
    const [AllUsers] = useManageUser()
    const handleChange =(e)=>{
        setSearchvalue(e.target.value)
    }
      const handleSearch = (e) =>{
        e.preventDefault();
        const value = e.target.searchvalue.value;
        setSearchvalue(value)
      }
      const totalAmount = AllPayment.reduce((total,item)=> total + item.total,0)
      const totalDue = AllPayment.reduce((total,item)=> total + item.due,0)
      const totalPaid = AllPayment.reduce((total,item)=> total + item.paid,0)


      // Send Email To Notify User Payment Info
      const handleEmail = (data)=>{
        const found = AllUsers?.find(item=> item.cuetId == data.cuetId)
        const mailData = {
          sender : {
            name: 'Samshul Islam',
            email: 'u1902166@student.cuet.ac.bd'
          },
          to : [
            {
              email: found?.email,
              name: found?.name
            }
          ],
          subject: 'Payment Due Information from Samshul Islam',
          htmlContent:`<div style="text-align: center; color:#633263">
          <h1>Printing Amount Information</h1>
          <img src='https://i.ibb.co/dJYDQB9/logo.png' width='100' height='100' />
          <h1 style="color:red;">⚠️ Attention ⚠️</h1>
          <h2>Your Printing due amount exceed <span style="color:red;">100</span> tk</h2>
          <h3 >Total Amount: ${data.total}</h3>
          <h3 >Total Paid: ${data.paid}</h3>
          <h3 style="color:red;">Total Due: ${data.due}</h3>
          <h4 style='margin: 25px 0px;'><i>For this issue, you need to clear your due as soon as possible</i></h4>
          <h5 style='margin-top: 25px;'>For Any Queries</h5>
          <h2>Contact Me</h2>
          <h4>Room 106, Shaheed Mohammad Shah Hall, CUET</h4>
          <h4>Email: samshul2001@gmail.com</h4>
          <h4>Whatsapp: +8801816244741</h4>

          </div>`
        }
        fetch('http://localhost:5000/sendmail',{
          method: 'POST',
          headers:{
            'accept': 'application/json',
            'api-key': import.meta.env.VITE_MAIL_APIKEY,
            'content-type': 'application/json'
          },
          body: JSON.stringify(mailData)
        })
      }
    return (
        <div className='w-full p-4'>
            <Breadcrumb pageName={'Payment Info'}></Breadcrumb>
            <div className='text-center mt-5 mb-5'>
            <Form onSubmit={handleSearch}>
            <input onChange={handleChange} type="text" name='searchvalue' placeholder="Type CUET ID to search" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" className='btn btn-outline ml-2' value="Search" />
            </Form>
          </div>
        
  <p className='text-center text-3xl font-bold mb-5'>Total Payment Information</p>
  <div className='flex justify-center'>
  <div className="stats shadow mt-10">
  <div className="stat">
    <div className="stat-title">Total Amount</div>
    <div className="stat-value">{totalAmount}</div>
  </div>
  <div className="stat">
    <div className="stat-title">Total Paid Amount</div>
    <div className="stat-value">{totalPaid}</div>
  </div>
  <div className="stat">
    <div className="stat-title">Total Due Amount</div>
    <div className="stat-value">{totalDue}</div>
  </div>
</div>
  </div>

            <p className='text-center mt-10 text-3xl font-bold mb-5'>All Payment Information</p>
            <div className="overflow-x-auto mb-10">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr className='bg-gray-300 text-black'>
        <td>#</td> 
        <td>User<br/> Name</td>
        <td>CUET Id</td> 
        <td>Total<br/> Amount</td> 
        <td>Paid</td> 
        <td>Due</td> 
        <td>Date</td>
        <td>Action</td>
      </tr>
    </thead> 
    <tbody>
        {
          AllPayment &&  AllPayment.map((item,index)=> <tr key={index}>
            <th>{++index}</th>
            <th>{item.name}</th>
            <th>{item.cuetId}</th>
            <th>{item.total}</th>
            <th>{item.paid}</th>
            <th>{item.due}</th>
            <th>{item.date}</th>
            <th onClick={()=>handleEmail(item)} className='btn btn-xs lg:m-2 btn-warning'>Send Mail</th>
          </tr>)
        }
    </tbody> 
  </table>
  
</div>
        </div>
    );
};

export default AllPayment;