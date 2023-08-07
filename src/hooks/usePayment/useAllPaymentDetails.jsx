import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllPaymentDetails = (name) => {
    const token= localStorage.getItem("access-token")
    const {data: AllPaymentDetails = [],refetch} = useQuery({
        queryKey:["AllPaymentDetails",name],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/adminpaymentdetails?search=${name}`,{
                headers :{
                    authorization: `bearer ${token}`
                }
            });
            return response.json()
        }
    })
    return [AllPaymentDetails,refetch];
};

export default useAllPaymentDetails;