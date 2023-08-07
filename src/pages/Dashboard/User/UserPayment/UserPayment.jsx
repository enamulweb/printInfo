import React from 'react';
import usePaymentHistory from '../../../../hooks/usePayment/usePaymentHistory';

const UserPayment = () => {
    const [PaymentHistory,] = usePaymentHistory()
    const totalPaid = PaymentHistory.reduce((total,item)=> total + item.paid,0)
    
    return (
        <div>
            <p className='text-center text-3xl font-bold mt-5 mb-5'>Total Amount Information</p>
  <div className="overflow-x-auto lg:w-3/4 lg:mx-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>Total Amount</th> 
        <th>Paid Amount</th> 
        <th>Due Amount</th> 
      </tr>
    </thead> 
    <tbody>
    <tr>
        <th>{PaymentHistory[0]?.total}</th>
       <th>{totalPaid}</th> 
       <th>{PaymentHistory[0]?.due}</th>
      </tr>
    </tbody>
  </table>
</div>

<p className='text-center mt-10 text-3xl font-bold mb-5'>All Payment Information</p>
            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>#</th> 
        <td>CUET Id</td>  
        <th>Total Amount</th> 
        <th>Paid Amount</th> 
        <th>Due Amount</th>
        <th>Date</th> 
      </tr>
    </thead> 
    <tbody>
      {
        PaymentHistory && PaymentHistory.map((item,index)=> <tr key={index}>
            <th>{++index}</th>
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

export default UserPayment;