/* eslint-disable no-unused-vars */
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
    return (
        <div className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center" id="contact">
          
                <ul className="my-auto md:pr-6 ">
                     <li className="flex">
                         <AiFillLinkedin  className="w-[70px] h-auto text-gray-300"/>
                         <div className="m-5">
                            <h3 className="text-lg font-bold text-gray-200">Kontakt</h3>
                            <p className="text-gray-400">Mobile : +49 1520 6334646</p>
                            <p className="text-gray-400">Email : Halaouiaron35@gmail.com</p>
                            <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/aron-halaoui-0267902b1/" className="text-gray-400"> <p className="text-gray-400">Zum LinkedIn</p></a>
                         </div>
                     </li>


                    <li className="flex">
                        <AiFillGithub className="w-[70px] h-auto text-gray-300"/>
                        <div className="m-5">
                            <h3 className="text-lg font-bold text-gray-200">Mein Github:</h3>
                            <p className="text-gray-400" target='_blank' rel="noopener noreferrer"><a href="https://github.com/Armooooon">Zum Github</a></p>
                         </div>
                    </li>
                </ul>

                <form action="https://getform.io/f/pbyglxjb" method="POST" className="max-w-6xl p-5 md:p-12" id="form">
                    <input
                    type="text"
                    id="name"
                    placeholder="your Name"
                    name="name"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
                    />
                    <input
                      type="email"
                      id="email"
                      placeholder="your Email"
                      name="email"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
                    />
                    <textarea
                      type="textarea"
                      id="textarea"
                      cols="30"
                      rows="4"
                      placeholder="your Message"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
                    />
                    <button type="submit" className="w-full py-3 rounded-md text-gray-200 font-semibold text-xl
                    bg-gradient-to-r from-[#50a7c7] via-[#1f7cBf] to-[#3d6ca4]">Senden</button>
                </form>

        </div>
    )
}

export default Contact