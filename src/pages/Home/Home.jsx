import React, { useContext } from 'react';
import useUser from '../../hooks/useUser/useUser';
import { AuthContext } from '../../providers/AuthProvider';
import Alert from './Alert';
import LoginRequest from './LoginRequest';
import PriceCart from './PriceCart';



const Home = () => {
    const [isUser] = useUser();
    const {user}= useContext(AuthContext);

    return (
        <div  className='bg-black/80 relative'>
           <Alert/>
           <LoginRequest/>
           <PriceCart/>
          
        </div>
    );
};


// style={{backgroundImage: `url(${homebanner})` , backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}
export default Home;