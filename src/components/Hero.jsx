/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import profilepic from'../assetsp/profilepic.png'
import { TypeAnimation } from 'react-type-animation'
import ShinyEffect from './ShinyEffect'

const Hero = () => {
    return (
       <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
            <div className='max-w-[800px]' >
                <p className='text-gray-200 md:text-6xl text-3xl tracking.tight'>
                HALLO, ICH BIN <br/>
                <span className=''>ARON HALAOUI</span> <br/>
                <TypeAnimation
                sequence={[
                "Entwickler", 
                 1000,
                "Frontend",
                1000,
                "Backend",
                 1000
                 ]}
                speed={50}
                repeat={Infinity}
                className='font-bold italic'
                />
                </p>
                <h2 className='text-gray-300'></h2>

                    <div className='flex flex-row gap-4 mb-4 md:mb-0'>
                  <button   className='transform tramsition-transform hover:scale-105 hover:shadow-lg
                    z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2
                    bg-gradient-to-r from-[#50a7c7] via-[#1f7cBf] to-[#3d6ca4] rounded-xl'><a className='block w-full h-full text-center' target='_blank' rel="noopener noreferrer"  href='/Portfolio/Lebenslauf_A.pdf'>Lebenslauf ansehen</a></button>

                    <button className='transform tramsition-transform hover:scale-105 hover:shadow-lg
                    z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl'> <a className='block w-full h-full text-center' target='_blank' rel="noopener noreferrer" href='https://github.com/Armooooon'>Referenzen</a></button>
                </div>
            </div>
      
            <img src={profilepic} className='w-[500px] md:-[600px]'/>
       </div>
    )
}

export default Hero