import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { LinearGradient } from 'react-text-gradients';
import { Slide } from "react-awesome-reveal";
const LoginRequest = () => {
    return (
        <div className='lg:flex justify-evenly pt-20 pb-40'>
            <Slide  direction='left'>
            <div className='w-1/2 lg:w-3/4 mx-auto lg:mx-0'>
            <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_M9p23l.json"
        >
        </Player>
            </div>
            </Slide>
            <Slide direction='right'>
            <div className='w-1/2 md:w-3/4 lg:w-3/4 pl-8 lg:pl-0'>
            <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_llbjwp92qL.json"
        style={{ height: '300px', width: '300px' }}
        >
        </Player>
        <p><LinearGradient gradient={['to left', '#029197 ,#55B97A, #A8E15D, #D3D739, #FFCD16, #FF981D, #FF6323, #FF4A78, #FF31CD, #9D77E1, #3ABDF6']} className='text-3xl left-10 md:left-40 lg:left-0 md:text-4xl lg:text-4xl font-serif absolute bottom-8 lg:bottom-28'>To SPI Printer Site</LinearGradient></p>
            </div>
            </Slide>
        </div>
    );
};

export default LoginRequest;