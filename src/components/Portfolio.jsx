/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import project1 from '../assetsp/project1.png'
import project2 from '../assetsp/project2.png'
import project3 from '../assetsp/project3.png'
import project4 from '../assetsp/project4.png'
import project5 from '../assetsp/project5.png'
import project6 from '../assetsp/project6.png'
import kartengenerator from '../assetsp/projects/Kartengenerator.png'
import { AiFillGithub } from 'react-icons/ai'
import ShinyEffect from './ShinyEffect'



const projects = [
    {
        img: project1,
        title:  "Project #1",
        description: "Eine Kleine, statische Website, für eine Lokale Schmiede",
        links: {
            site: "#",
            github: "https://github.com/Inhorni/SchmiedeBlecken"
        }
    },
    {
        img: project2,
        title:  "Project #2",
        description: "Eine Website für eine Schule in Demmin, erstellt im MVC mit PHP, HTML, CSS und JAVASCRIPT + SQL und MYSQL",
        links: {
            site: "#",
            github: "https://github.com/Armooooon/Schulwebsite"
        }
    },
    {
        img: kartengenerator,
        title:  "Project #3",
        description: "In Kooperation -> ein Kartengenerator erstellt mit PHP, HTML, CSS und JAVASCRIPT sowie SQL und MYSQL ",
        links: {
            site: "#",
            github: "#"
        }
    },
    {
        img: project4,
        title:  "Project #4",
        description: "Ein einfacher Discord-bot in Eclipse mit JAVA",
        links: {
            site: "#",
            github: "https://github.com/Armooooon/OgerOve-bot"
        }
    },
    {
        img: project5,
        title:  "Project #5",
        description: "Eine Autodatenbank für die Verwaltung von Autos.",
        links: {
            site: "#",
            github: "https://github.com/Armooooon/AutoDatenbank"
        }
    },
    {
        img: project6,
        title:  "Project #6",
        description: "UI for frontend development using React",
        links: {
            site: "#",
            github: "#"
        }
    },
]
const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0)

return(

<div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row' id='portfolio'>
<div className='z-10 glass p-6 w-full border-2 max-w-[600px]'>
    <div className='w-full h-80'>
        <img src={projects[currentProject].img} alt={projects[currentProject].title} className='w-full h-full object-cover rounded-lg mb-4'/>
    </div>
    
    <p className='text-gray-200 my-4'>
    {projects[currentProject].description}
    </p>
    <div className='flex space-x-4'>
        <a href={projects[currentProject].links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View Site</a>
        <a href={projects[currentProject].links.github} className='px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'> <AiFillGithub/> </a>
    </div>
    
</div>



<ul className='z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1'>
  {projects.map((project, index) => (
    <li key={index} onClick={() => setCurrentProject(index)} className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${currentProject === index ? "bg-slate-900" : ""}`}>
      {project.title}
    </li>
  ))}
</ul>


</div>



)

}

export default Portfolio