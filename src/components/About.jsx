/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import project1 from '../assetsp/project1.png'
import project2 from '../assetsp/project2.png'
import project3 from '../assetsp/project7.png'
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiMongodb,
    DiGithubBadge,
    DiGit,
    DiMysql
} from 'react-icons/di'

const About = () => {
return (
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'> 

            <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center md:hidden'>
                <DiHtml5 className='text-orange-600'/>
                <DiCss3 className='text-blue-600'/>
                <DiBootstrap className='text-purple-600'/>
                <DiJavascript1 className='text-yellow-500'/>
                <DiReact className='text-blue-500'/>
                <DiNodejsSmall className='text-green-500'/>
                
            </div>

        <div className='relative group'>
            <div className='w-full h-full absolute -inset-l bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>

            <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project1} alt='project1' className='rounded-lg md:max-w-[500px]'/>
            </div>
        </div>

        <div className='p-6'>
            <h2 className='text-gray-200 text.3xl font-bold mb-4'> Skills</h2>
            <p className='text-gray-300 mb-4'>
                Ich bin ausgebildeter technischer Assistent für Informatik. Ich habe Erfahrungen in HTML, CSS und Javascript. Zusätzlich weiß ich mit Frameworks wie React.js und Bootstrap umzugehen und habe erfahrung in der versionskontrolle mit Git. Letzlich zu erwähnen sind meine Kenntnise in MYSQL.
            </p>
            <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
                <DiHtml5 className='text-orange-600'/>
                <DiCss3 className='text-blue-600'/>
                <DiBootstrap className='text-purple-600'/>
                <DiJavascript1 className='text-yellow-500'/>
                <DiReact className='text-blue-500'/>
                <DiGit className='text-red-500'/>
                <DiMysql className='text-blue-500'/>
            </div>

        </div>

        <div className='p-6'>
            <h2 className='text-gray-200 text.3xl font-bold mb-4'> Interessen</h2>
            <p className='text-gray-300 mb-4'>
                Ich bin begeistert für Strategie-Computerspiele, treibe Sport, beschäftige mich mit Computern, Programmiere kleine Spiele und höre ab und zu gerne Musik
            </p>
        

        </div>

        <div className='relative group'>
            <div className='w-full h-full absolute -inset-l bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>

            <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project2} alt='project2' className='rounded-lg md:max-w-[500px]'/>
            </div>
        </div>

        <div className='relative group'>
            <div className='w-full h-full absolute -inset-l bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300'></div>

            <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                <img src={project3} alt='project3' className='rounded-lg md:max-w-[500px]'/>
            </div>
        </div>

        <div className='p-6'>
            <h2 className='text-gray-200 text.3xl font-bold mb-4'> Sprachen</h2>
            <p className='text-gray-300 mb-4'>
                Deutsch Spreche ich als Muttersprache. Englisch ist meine Zweitsprache, diese spreche ich Fließend (Level C1), angelernt habe ich Russisch, wobei ich hier lediglich die Grundkenntnise besitze.
            </p>
        

        </div>

    </div>
    )
}

export default About