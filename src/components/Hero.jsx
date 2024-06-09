import React from 'react'
import profilepic from'../assetsp/profilepic.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
       <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto bg-white mb-8 md:mb-32 mt-14'>
            <div className='max-w-[800px]' >
                <p>
                HALLO, ICH BIN <br/>
                <span>ARON HALAOUI</span> <br/>
                <TypeAnimation
                sequence={[
                "Entwickler", 
                 1000,
                "Webdesigner",
                1000,
                "Software-Entwickler",
                 1000
                ]}
                speed={50}
                repeat={Infinity}
                className='font-bold italic'
                />
                </p>
                <h2></h2>
            </div>
            <img />
       </div>
    )
}

export default Hero