import React from 'react';
import { FaPagelines } from 'react-icons/fa';
import { FcPrint } from 'react-icons/fc';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { GiPriceTag } from 'react-icons/gi';
import { PiWarningCircleBold } from 'react-icons/pi';
import { Slide, Zoom } from 'react-awesome-reveal';


const PriceCart = () => {
    return (
        <div className='pb-10'>
            <p className='text-center text-5xl font-mono m-10 font-bold text-white'>Pricing</p>

        <div className='lg:flex justify-evenly'>
            <Slide>
           <Zoom>
           <div className="card w-72 mb-8 lg:mb-0 md:w-96 lg:w-96 mx-auto lg:mx-4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <FaPagelines className='text-5xl text-green-800'/>
                    <FcPrint className='text-5xl'></FcPrint>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><BsArrowUpRightCircle/>Black Page(single)</h2>
                    <p className='w-48 flex gap-4 font-semibold text-2xl'><GiPriceTag className='text-2xl mt-2'/> 2tk</p>
                </div>
            </div>
           </Zoom>
            </Slide>


        <Slide direction='down' >
        <Zoom>
        <div className="card w-72 mb-8 lg:mb-0 md:w-96  lg:w-96 mx-auto lg:mx-4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <FaPagelines className='text-5xl text-green-800'/>
                    <FcPrint className='text-5xl'></FcPrint>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><BsArrowUpRightCircle/>Black Page(Double)</h2>
                    <p className='w-48 flex gap-4 font-semibold text-2xl'><GiPriceTag className='text-2xl mt-2'/> 3tk</p>
                </div>
        </div>
        </Zoom>
        </Slide>
        
        <Slide direction='right'>
        <Zoom>
        <div className="card w-72 mb-8 lg:mb-0 md:w-96  lg:w-96 mx-auto lg:mx-4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <FaPagelines className='text-5xl text-green-800'/>
                    <FcPrint className='text-5xl'></FcPrint>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><BsArrowUpRightCircle/>Graph Page</h2>
                    <p className='w-32 flex gap-4 font-semibold text-2xl'><GiPriceTag className='text-2xl mt-2'/> 3tk</p>
                </div>
        </div>
        </Zoom>
        </Slide>
        </div>

        <div className='lg:flex justify-evenly mt-10'>
        <Slide direction='left'>
        <Zoom>
            <div className="card w-72 mb-8 lg:mb-0 md:w-96 lg:w-96 mx-auto lg:mx-4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <FaPagelines className='text-5xl text-green-800'/>
                    <FcPrint className='text-5xl'></FcPrint>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><BsArrowUpRightCircle/>Front Page</h2>
                    <p className='w-32 flex gap-4 font-semibold text-2xl'><GiPriceTag className='text-2xl mt-2'/> 4tk</p>
                </div>
        </div>
        </Zoom>
        </Slide>

        <Slide direction='right'>
        <Zoom>
        <div className="card w-72 mb-8 lg:mb-0 md:w-96  lg:w-96 mx-auto lg:mx-4 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
                    <FaPagelines className='text-5xl text-green-800'/>
                    <FcPrint className='text-5xl'></FcPrint>
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title"><BsArrowUpRightCircle/>Image Page</h2>
        <p className='w-32 flex gap-4 font-semibold text-2xl'><GiPriceTag className='text-2xl mt-2'/> 5tk</p>
        </div>
        </div>
        </Zoom>
        </Slide>
        </div>
        <div>
        <div className="card lg:w-2/3 mt-10 mx-4 lg:mx-auto bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
        <h2 className="card-title"><PiWarningCircleBold className='text-5xl text-rose-800'/></h2>
        <p className='flex gap-4 items-center text-xs font-semibold'><BsArrowUpRightCircle className='text-5xl opacity-0 lg:opacity-1'/> রঙিন প্রিন্টের ক্ষেত্রে পেইজের কালারের উপর ভিত্তি করে টাকা সামান্য কমবেশি হতে পারে। এক্ষেত্রে অতিরিক্ত টাকাটির পরিমাণ প্রত্যেক গ্রাহকের ড্যাশবোর্ডের User Print Info এর মধ্যে Additional Charge কলামে যুক্ত করা থাকবে। নির্ধারিত টাকার থেকে কম পরিমান বিল আসলে , যত টাকা কম আসবে সেইটি প্রত্যেক গ্রাহকের ড্যাশবোর্ডের User Print Info এর মধ্যে Discount কলামে যুক্ত করা থাকবে।</p>
        </div>
        </div>
            
        </div>



        </div>
    );
};

export default PriceCart;