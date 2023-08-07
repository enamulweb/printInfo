import React, { useContext } from 'react';
import avatarImg from './../../../../src/assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';
import useUser from '../../../hooks/useUser/useUser';


const Avatar = () => {
    const {user} = useContext(AuthContext)
    const [isUser,refetch] = useUser();
    return (
        <img src={isUser && isUser.photourl ? isUser.photourl : avatarImg} className='rounded-full' alt='profile' height='40' width='40'>
            
        </img>
    );
};

export default Avatar;