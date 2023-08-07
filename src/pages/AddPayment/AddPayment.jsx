import moment from 'moment/moment';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useUser from '../../hooks/useUser/useUser';
import { Form } from 'react-router-dom';
import usePayment from '../../hooks/usePayment/usePayment';
import { toast } from 'react-hot-toast';

const AddPayment = () => {
    const [isUser] = useUser();
    const [PaymentInfo,setPaymentInfo] = useState({});
    const [disable,setDisable] = useState(true)
    const [AllPayment,refetch] = usePayment('')

    const handleSubmit = (e)=>{
        const form = e.target;
        const date = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
        const name = form.name.value;
        const cuetId = form.cuetId.value;
        const total = parseInt(form.total.value);
        const paid = parseInt(form.paid.value);
        const dues = parseInt(form.due.value);
        const due = dues - paid ;
        const paymentData = {name,cuetId,total,due,paid,date}
        Swal.fire({
            title: `You want to Proceed Payment!`,
            text: `Your Payment Amount is ${paid}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Payment it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:5000/userpaymentinfo',
                      {
                        method: 'POST',
                        headers:{
                          'content-type': 'application/json'
                        },
                        body: JSON.stringify(paymentData)
                      }
                      )
                      .then(res=> res.json())
                      .then(result=>{
                        if(result.insertedId){
                            refetch()
                              Swal.fire(
                                'Added!',
                                'Payment Information has been Added.',
                                'success'
                            )
                            form.reset()
                        }
                      
                    })
            }
          })
    }
    const handleChange = (e)=>{
        const id = e.target.value
        const found = AllPayment.find(payment=> payment.cuetId === id)
        setPaymentInfo(found)
        if(id.length == 7 && !found){
            toast.error(`${id} Not Found!! To pay, At first request to pay`)
        }
        if(found){
            setDisable(false)
        }
        if(!found){
            setDisable(true)
        }
    }
    return (
        <div className='p-5 font-mono'>
        <div className='min-h-screen sm:w-2/6 md:w-5/6 lg:w-3/6 mx-auto'>
             <h2 className='text-center text-2xl font-extrabold pb-10 '> Add New Payment Information</h2>
             <Form onSubmit={handleSubmit} className='border p-4 rounded border-red-400'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" name='name' value={PaymentInfo?.name || ''} placeholder="User Name" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required readOnly/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">CUET ID</span>
                    </label>
                    <input onChange={handleChange} type="text" name='cuetId' placeholder="CUET ID" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Total Amount</span>
                    </label>
                    <input type="text" name='total' value={PaymentInfo?.total || ''} placeholder="Total Due Amount" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required readOnly/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Total Due Amount</span>
                    </label>
                    <input type="text" name='due' value={PaymentInfo?.due || ''} placeholder="Total Due Amount" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required readOnly/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Total Paid Amount</span>
                    </label>
                    <input type="text" name='paid' placeholder="Total Paid Amount" className="input border rounded-lg h-12 w-full pl-4 mb-4 border-red-400" required/>
                </div>
                <input disabled={disable} className='btn btn-accent text-white' type="submit" value="Add Paid Amount" />
             </Form>
        </div>
        </div>
    );
};

export default AddPayment;