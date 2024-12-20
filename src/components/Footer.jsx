/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
      
        <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
       
            <div className='space-y-4'>
                <h3 className='text-2xl text-gray-200 font-semibold'>A.Halaoui</h3>
                <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
                <a><FaGithubSquare/></a>
                <a><FaInstagram/></a>
                </div>
            </div>

            <p className='text-gray-400'> @ 2024 A.Halaoui</p>
        </div>
            
       
    )
}

export default Footer
