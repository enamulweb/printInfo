import { useQuery } from '@tanstack/react-query';

const usePayment = (name) => {
    const token= localStorage.getItem("access-token")
    const {data: AllPayment = [],refetch} = useQuery({
        queryKey:["AllPayment",name],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/adminpaymentinfo?search=${name}`,{
                headers :{
                    authorization: `bearer ${token}`
                }
            });
            return response.json()
        }
    })
    return [AllPayment,refetch];
};

export default usePayment;