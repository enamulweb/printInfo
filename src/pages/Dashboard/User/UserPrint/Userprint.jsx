import React from 'react';
import useUserPrint from '../../../../hooks/useUser/useUserPrint';

const Userprint = () => {
    const [UserPrints,refetch] = useUserPrint()
    const totalAmount = UserPrints.reduce((total,item)=> total + item.total,0)
      const totalblacksingle = UserPrints.reduce((total,item)=> total + item.blacksingle,0)
      const totalblackdouble = UserPrints.reduce((total,item)=> total + item.blackdouble,0)
      const totalfront = UserPrints.reduce((total,item)=> total + item.front,0)
      const totalgraph = UserPrints.reduce((total,item)=> total + item.graph,0)
      const totalcolor = UserPrints.reduce((total,item)=> total + item.color,0)
      const totaldiscount = UserPrints.reduce((total,item)=> total + item.discount,0)
      const totaladditional = UserPrints.reduce((total,item)=> total + item.additional,0)
    return (
        <div>
            <p className='text-center text-3xl font-bold mt-5 mb-5'>Total Amount Information</p>
  <div className="overflow-x-auto lg:w-3/4 lg:mx-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>Black<br/>(single)</th> 
        <th>Black<br/>(double)</th> 
        <th>Front<br/> Page</th> 
        <th>Graph<br/> Print</th> 
        <th>Image<br/> Print</th> 
        <th>Total<br/> Discount</th> 
        <th>Total<br/> Additional Charge</th>
        <th>Total<br/> Amount</th> 
      </tr>
    </thead> 
    <tbody>
      <tr>
        <th>{totalblacksingle}</th> 
        <th>{totalblackdouble}</th> 
        <th>{totalfront}</th> 
        <th>{totalgraph}</th> 
        <th>{totalcolor}</th> 
        <th>{totaldiscount} tk</th> 
        <th>{totaladditional} tk</th>
        <th>{totalAmount} tk</th> 
      </tr>
    </tbody>
  </table>
</div>

<p className='text-center mt-10 text-3xl font-bold mb-5'>All Print Information</p>
            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>#</th> 
        <th>CUET Id</th> 
        <th>Black<br/>(single)</th> 
        <th>Black<br/>(double)</th> 
        <th>Front<br/> Page</th> 
        <th>Graph<br/> Print</th>
        <th>Image<br/> Print</th> 
        <th>Discount</th> 
        <th>Additional<br/> Charge</th> 
        <th>Total<br/> Amount</th> 
        <th>Date</th> 
        <th>Issued By</th> 
      </tr>
    </thead> 
    <tbody>
      {
        UserPrints && UserPrints.map((print,index)=> <tr key={index}>
            <th>{++index}</th>
            <th>{print.cuetId}</th>
            <th>{print.blacksingle}</th>
            <th>{print.blackdouble}</th>
            <th>{print.front}</th>
            <th>{print.graph}</th>
            <th>{print.color}</th>
            <th>{print.discount}</th>
            <th>{print.additional}</th>
            <th>{print.total}</th>
            <th>{print.date}</th>
            <th>{print.issuedBy}</th>

        </tr>)
      }
    </tbody> 
  </table>
</div>
</div>
)}


export default Userprint;