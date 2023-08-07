import React from 'react';
import logoImg from './../../../../src/assets/images/logo.png'
import {Link} from 'react-router-dom'
const Logo = () => {
    return (
       <Link to ='/'>
       <img src={logoImg} width='56' height='56'
       alt='logo'
       className='md:block'
       ></img>

       </Link>
    )
};

export default Logo;