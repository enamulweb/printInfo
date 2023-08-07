import { useQuery } from '@tanstack/react-query';
import useUser from './useUser';

const useUserPrint = () => {
    const [isUser] = useUser()
    const token= localStorage.getItem("access-token")
    const {data: UserPrints = [],refetch} = useQuery({
        queryKey:["UserPrints",isUser?.cuetId],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/userprintinfo?cuetId=${isUser?.cuetId}`,{
                headers :{
                    authorization: `bearer ${token}`
                }
            });
            return response.json()
        }
    })
    return [UserPrints,refetch];
};

export default useUserPrint;