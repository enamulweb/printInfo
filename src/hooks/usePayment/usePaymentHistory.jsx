import { useQuery } from '@tanstack/react-query';
import useUser from '../useUser/useUser';


const usePaymentHistory = () => {
    const [isUser] = useUser()
    const token= localStorage.getItem("access-token")
    const {data: PaymentHistory = [],refetch} = useQuery({
        queryKey:["PaymentHistory",isUser?.cuetId],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/userpaymentinfo?cuetId=${isUser?.cuetId}`,{
                headers :{
                    authorization: `bearer ${token}`
                }
            });
            return response.json()
        }
    })
    return [PaymentHistory,refetch];
};

export default usePaymentHistory;