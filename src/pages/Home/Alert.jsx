import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Alert = () => {
    const {user}= useContext(AuthContext);
    return (
        <>
        {
            user && !user?.emailVerified  && <>
                <div className="alert alert-error 
                w-10/12 lg:w-96 z-20 absolute top-[10%] left-[9%] lg:left-[35%] font-mono justify-">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-10 w-10" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className='text-xl'>Waring! Your Email not verified. Check your email to verify. Verify link expire in 5min.</span>
                </div>
                </>
        }
        </>
    );
};

export default Alert;