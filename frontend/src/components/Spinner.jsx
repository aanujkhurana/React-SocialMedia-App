import React from 'react';
import {ColorRing}from 'react-loader-spinner';

const Spinner = ({message}) => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <ColorRing
            visible={true}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            height={100}
            width={100}
            className='m-5'
            />
            <p className='text-lg text-center px-2'>{message}</p>
        </div>
    )
}

export default Spinner