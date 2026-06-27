

import profile from "../assets/profile.png";
import { FaBriefcase, FaCode } from "react-icons/fa";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
} from "react-icons/fa";

import {
    SiJavascript,
    SiMongodb,
    SiTailwindcss,
} from "react-icons/si";

const About = () => {
    return (
        <section
            id="about"
            className="bg-[#12122D] py-28 scroll-mt-10"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-[480px_minmax(0,1fr)] gap-12 lg:gap-24 items-start">



                    <div className="relative flex justify-center">


                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#A8E63D]/15 blur-[90px] animate-pulse"></div>
                        </div>


                        <div className="relative">


                            <div className="absolute -inset-[2px] rounded-[34px] bg-gradient-to-br from-[#A8E63D] via-[#5F6FFF] to-[#A8E63D] opacity-70 blur-sm group-hover:blur-md transition-all duration-500"></div>


                            <div
                                className=" relative bg-[#1B1B3A] border border-[#2A2950] rounded-[30px] p-4 overflow-hidden transition-all duration-500 ease-out group hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(168,230,61,0.25)] hover:border-[#A8E63D]"
                            >

                                <img
                                    src={profile}
                                    alt="Vraj Patel"
                                    className="w-full max-w-md mx-auto lg:max-w-none h-auto lg:h-[560px] object-cover rounded-3xl  transition-transform duration-700 ease-out group-hover:scale-105"
                                />


                                <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-[#12122D]/40 via-transparent to-transparent pointer-events-none"></div>


                                <div
                                    className="absolute top-0 -left-[150%]  h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[160%]  transition-all  duration-1000"
                                />

                            </div>

                        </div>
                    </div>


                    <div className="pt-2">

                        <div className="flex items-center gap-3">

                            <span className="uppercase tracking-[0.22em] text-[#A8E63D] text-md font-semibold">
                                About Me
                            </span>

                        </div>

                        <h2 className="mt-7 text-[56px] leading-[1.05] font-black tracking-[-0.03em] text-white">
                            Building web apps that
                            <span className="block text-[#A8E63D]">
                                scale, perform & matter
                            </span>
                        </h2>


                        <p className="mt-10 max-w-[620px] text-[#A7A7C7] text-lg leading-9">
                            I'm
                            <span className="text-white font-medium">
                                {" "}Vraj Patel
                            </span>,
                            a BE Computer Engineering student specializing in MERN
                            stack development — turning complex problems into clean,
                            production-ready web applications. I care deeply about
                            writing maintainable code, building intuitive UI, and
                            delivering projects that work flawlessly in the real world.
                        </p>

                        <p className="mt-7 max-w-[620px] text-[#A7A7C7] text-lg leading-9">
                            During my React.js internship at
                            <span className="text-white font-medium">
                                {" "}Elsner Technologies
                            </span>,
                            I strengthened my frontend skills by building reusable
                            UI components, integrating REST APIs, and managing code
                            collaboratively using Git.
                        </p>


                    </div>


                </div>

                <div className="flex items-center justify-center lg:justify-normal gap-3 mt-16 mb-8">
                    <FaBriefcase className="text-[#A8E63D] text-2xl" />

                    <h3 className="text-3xl font-bold text-white">
                        Experience
                    </h3>
                </div>

                <div className="bg-[#1B1B3A] border border-[#2A2950] rounded-3xl p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                        <div>
                            <h4 className="text-2xl font-bold text-white">
                                React.js Developer Intern
                            </h4>

                            <p className="text-gray-400 mt-1">
                                Elsner Technologies Pvt. Ltd.
                            </p>
                        </div>

                        <span className="text-[#A8E63D] font-medium">
                            May 2025 – June 2025
                        </span>
                    </div>

                    <ul className="mt-8 space-y-4 text-[#C2C2DE]">
                        <li>
                            • Built 5+ reusable UI components in React.js, improving code
                            reusability.
                        </li>

                        <li>
                            • Implemented frontend features using JavaScript, HTML5, CSS3 and
                            React.js.
                        </li>

                        <li>
                            • Integrated REST APIs using React Hooks and Context API.
                        </li>

                        <li>
                            • Used Git and GitHub for collaborative version control.
                        </li>
                    </ul>
                </div>

            </div>


        </section>
    );
};

export default About;