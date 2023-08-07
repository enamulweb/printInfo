import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useUser from './useUser';

const useAllPrints = (name) => {
    const [isUser] = useUser()
    const token= localStorage.getItem("access-token")
    const {data: AllPrints = [],refetch} = useQuery({
        queryKey:["AllPrints",name],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/adminprintinfo?search=${name}`,{
                headers :{
                    authorization: `bearer ${token}`
                }
            });
            return response.json()
        }
    })
    return [AllPrints,refetch];
};

export default useAllPrints;