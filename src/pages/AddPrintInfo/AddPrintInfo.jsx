import moment from 'moment/moment';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAllPrints from '../../hooks/useUser/useAllPrints';
import useUser from '../../hooks/useUser/useUser';

const AddPrintInfo = () => {
    const [isUser] = useUser();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [,refetch] = useAllPrints('')
    const onSubmit = formData =>{
        const date = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
        const blacksingle = Math.abs(parseInt(formData.blacksingle));
        const blackdouble = Math.abs(parseInt(formData.blackdouble));
        const color = Math.abs(parseInt(formData.color));
        const front = Math.abs(parseInt(formData.front));
        const graph = Math.abs(parseInt(formData.graph));
        const discount = Math.abs(parseFloat(formData.discount));
        const additional = Math.abs(parseFloat(formData.addition_amount));
        const total = (blacksingle*2 + blackdouble*3 + color*5 + graph*3 + front*4)+additional - discount ;
        formData.total = total;
        const printInfo = {name:formData.name,cuetId: formData.cuetId,blacksingle,blackdouble,color,front,graph,discount,additional,total,issuedBy:isUser?.email,date,status:'Complete'}
        Swal.fire({
            title: `You want to Add this!`,
            text: `Total Amount is ${total}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Add it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:5000/adminprintinfo',
                      {
                        method: 'POST',
                        headers:{
                          'content-type': 'application/json'
                        },
                        body: JSON.stringify(printInfo)
                      }
                      )
                      .then(res=> res.json())
                      .then(result=>{
                        if(result.insertedId){
                            refetch()
                              Swal.fire(
                                'Added!',
                                'Print Information has been Added.',
                                'success'
                            )
                        }
                      
                    })
            }
          })
        
    }
    return (
        <div className='p-5 font-mono'>
        <div className='min-h-screen lg:w-2/6 mx-auto'>
             <h2 className='text-center text-2xl font-extrabold pb-10 '> Add New Print Information</h2>
            <form className='border-2 p-5 rounded-lg w-full' onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="name">User Name</label>
               <input className='border rounded-lg h-12 w-full pl-4 mb-4 border-red-400' defaultValue="" type='text' id='name' placeholder='User Name' {...register("name",{required: true})} required/>
               <br/>
               <label htmlFor="cuetID">CUET ID</label>
               <input className='border rounded-lg h-12 w-full pl-4 mb-4 border-red-400' defaultValue="" type='text' id='cuetID' placeholder='CUET ID' {...register("cuetId",{required: true})} required/>
               <br/>
               <div className='flex md:gap-4 lg:gap-4'>
               <div>
               <label htmlFor="black_single">Black (Single)</label>
               <br/>
               <input className='border rounded-lg h-12 w-20 md:w-52 lg:w-32 pl-4 mb-4 border-red-400' name='black_single' defaultValue={0} type='number' placeholder='Black Print(Single)' {...register("blacksingle")} required/>
               </div>
               <br/>
               <div>
               <label htmlFor="black_double">Black (Double)</label>
               <br/>
               <input className='border rounded-lg h-12 w-20 md:w-52 lg:w-32 pl-4 mb-4 border-red-400' name='black_double' defaultValue={0} type='number' placeholder='Black Print(Double)' {...register("blackdouble")} required/>
               </div>
               <br/>
               <div>
               <label htmlFor="front">Front Page</label>
               <br/>
               <input className='border rounded-lg h-12 w-20 md:w-52 lg:w-32 pl-4 mb-4 border-red-400' name='front' defaultValue={0} type='number' placeholder='Front Page Print' {...register("front")} required/>
               </div>
               </div>
               <div className='flex gap-4'>
               <div>
               <label htmlFor="graph">Graph Print</label>
               <br/>
               <input className='border rounded-lg h-12 w-24 md:w-52 lg:w-52 pl-4 mb-4 border-red-400' name='graph' defaultValue={0} type='number' placeholder='Graph Print' {...register("graph")} required/>
               </div>
               <br/>
               <div>
               <label htmlFor="color">Image Print</label>
               <br/>
               <input className='border rounded-lg h-12 w-24 md:w-52 lg:w-52 pl-4 mb-4 border-red-400' name='color' defaultValue={0} type='number' placeholder='Image Print' {...register("color")} required/>
               </div>
               <br/>
               </div>
               <div className='flex gap-4'>
               <div>
               <label htmlFor="discount">Discount</label>
               <br/>
               <input className='border rounded-lg h-12 w-24 md:w-52 lg:w-52 pl-4 mb-4 border-red-400' name='discount' defaultValue={0} type='number' placeholder='Discount' {...register("discount")} required/>
               </div>
               <br/>
               <div>
               <label htmlFor="addition_amount" className='text-xs lg:text-lg'>Additional Amount</label>
               <br/>
               <input className='border rounded-lg h-12 w-24 md:w-52 lg:w-52 pl-4 mb-4 border-red-400' name='addition_amount' defaultValue={0} type='number' placeholder=' Addition Amount' {...register("addition_amount")} required/>
               </div>
               <br/>
               </div>
               <br/>
              
               <input className='btn btn-accent text-white' type="submit" value="Add Print Info" />
            </form>
        </div>
        </div>
    );
};

export default AddPrintInfo;