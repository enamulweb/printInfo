import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useManageUser = () => {
    const token= localStorage.getItem("access-token")
    const {data: AllUsers = [],refetch} = useQuery({
        queryKey:["AllUsers"],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/users`,{
                headers :{
                    authorization: `bearer ${token}`
                }
            });
            return response.json()
        }
    })
    return [AllUsers,refetch];
};

export default useManageUser;