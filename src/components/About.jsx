/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import project1 from "../assetsp/project1.png";
import project2 from "../assetsp/project2.png";
import project3 from "../assetsp/project7.png";
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
  DiMysql,
  DiLaravel,
  DiPhp,
} from "react-icons/di";

const About = () => {
return (
  <div className="max-w-[1300px] mx-auto p-6 flex flex-col gap-16" id="about">
    {/* Skills Section */}
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Bild */}
      <div className="relative group w-full md:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img src={project1} alt="project1" className="rounded-lg w-full" />
        </div>
      </div>

      {/* Text */}
      <div className="p-6 w-full md:w-1/2">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300 mb-4">
          Ich bin ausgebildeter Technischer Assistent für Informatik und verfüge über umfangreiche Kenntnisse in HTML und CSS. Zudem habe ich Erfahrung im Umgang mit Frameworks wie React.js und Bootstrap. Ich habe auch Erfahrung mit der Versionskontrolle durch Git. Darüber hinaus verfüge ich über solide Kenntnisse in MySQL sowie in PHP und dem Framework Laravel (mit Livewire und Tailwind CSS).
        </p>
        {/* Icons */}
        <div className="flex flex-wrap gap-4 text-4xl justify-center">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiBootstrap className="text-purple-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiGit className="text-red-500" />
          <DiMysql className="text-blue-500" />
          <DiLaravel className="text-orange-700" />
          <DiPhp className="text-blue-900" />
        </div>
      </div>
    </div>

    {/* Interessen Section */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
      {/* Bild */}
      <div className="relative group w-full md:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img src={project2} alt="project2" className="rounded-lg w-full" />
        </div>
      </div>

      {/* Text */}
      <div className="p-6 w-full md:w-1/2">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Interessen</h2>
        <p className="text-gray-300 mb-4">
          Ich bin ein begeisterter Fan von Strategie-Computerspielen, treibe regelmäßig Sport und beschäftige mich intensiv mit Computern. In meiner Freizeit programmiere ich kleine Spiele und höre gerne Musik.
        </p>
      </div>
    </div>

    {/* Sprachen Section */}
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Bild */}
      <div className="relative group w-full md:w-1/2">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img src={project3} alt="project3" className="rounded-lg w-full" />
        </div>
      </div>

      {/* Text */}
      <div className="p-6 w-full md:w-1/2">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Sprachen</h2>
        <p className="text-gray-300 mb-4">
          Deutsch ist meine Muttersprache. Englisch spreche ich fließend auf C1-Niveau.
        </p>
      </div>
    </div>
  </div>
);

};

export default About;
