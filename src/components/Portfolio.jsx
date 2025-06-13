/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';
import schmiedeblecken from '../assetsp/projects/schmiedeblecken.png';
import pest from '../assetsp/projects/Pestalozzi.png';
import kartengenerator from '../assetsp/projects/Kartengenerator.png';
import ovbot from '../assetsp/projects/project8.png';
import autodatenbank from '../assetsp/projects/Autodatenbank.png';
import login from '../assetsp/projects/Login.png';

const projects = [
    {
        img: schmiedeblecken,
        title: "Project #1",
        description: "Eine Kleine, statische Website, für eine Lokale Schmiede",
        links: {
            site: "https://armooooon.github.io/SchmiedeKopie/Main.html",
            github: "https://github.com/Inhorni/SchmiedeBlecken",
        },
    },
    {
        img: pest,
        title: "Project #2",
        description: "Eine Website für eine Schule in Demmin",
        links: {
            github: "https://github.com/Armooooon/Schulwebsite",
        },
    },
    {
        img: kartengenerator,
        title: "Project #3",
        description: "Ein Website für ein Fleischereibetrieb",
        links: {
            github: "https://github.com/Armooooon/ED-El-Fleisch",
        },
    },
    {
        img: ovbot,
        title: "Project #4",
        description: "Eine Website zum Karten sammeln und Decks bauen.",
        links: {
        },
    },
    {
        img: autodatenbank,
        title: "Project #5",
        description: "Eine Autodatenbank für die Verwaltung von Autos.",
        links: {
            github: "https://github.com/Armooooon/AutoDatenbank",
        },
    },
    {
        img: login,
        title: "Project #6",
        description: "Ein Onlineshop mit Shopware Erstellt.",
        links: {
            site: "https://we-are-nord.de",
        },
    },
];

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [setNoScroll, setSetNoScroll] = useState(false);

    useEffect(() => {
        if (setNoScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [setNoScroll]);

    const openModal = () => {
        setIsModalOpen(true);
        setSetNoScroll(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSetNoScroll(false);
    };

    // Removed handleScroll function as it is unused

    return  (
        <div className="relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row " id="portfolio">
            <div className="z-10 glass p-6 w-full border-2 max-w-[600px]">
                <div className="w-full h-80 cursor-pointer" onClick={openModal}>
                    <img
                        src={projects[currentProject].img}
                        alt={projects[currentProject].title}
                        className="w-full h-full object-contain rounded-lg mb-4"
                    />
                </div>

                <p className="text-gray-200 my-4">{projects[currentProject].description}</p>
                <div className="flex space-x-4">
                    {projects[currentProject].links.github && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={projects[currentProject].links.github}
                            className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
                        >
                            <AiFillGithub />
                        </a>
                    )}

                    {projects[currentProject].links.site && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={projects[currentProject].links.site}
                            className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
                        >
                            <AiOutlineGlobal />
                        </a>
                    )}
                </div>
            </div>

            <ul className="z-10 md:ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
                {projects.map((project, index) => (
                    <li
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${
                            currentProject === index ? 'bg-slate-900' : ''
                        }`}
                    >
                        {project.title}
                    </li>
                ))}
            </ul>

            {/* Modal for Image */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={projects[currentProject].img}
                            alt={projects[currentProject].title}
                            className="w-full h-auto object-contain rounded-lg"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-2xl bg-gray-700 rounded-full p-2 hover:bg-gray-600"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
