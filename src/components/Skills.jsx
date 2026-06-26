import {
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaGitAlt,
    FaTools,
    FaServer,
    FaCode,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiPostman,
    SiRedux,
    SiRender,
    SiVercel
} from "react-icons/si";

const skills = [

    { icon: <FaReact />, name: "React.js" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiRedux />, name: "Redux Toolkit" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },


    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaServer />, name: "REST API" },
    { icon: <FaServer />, name: "Socket.io" },


    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaDatabase />, name: "JWT Auth" },


    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiRender />, name: "Render" },
    { icon: <SiVercel />, name: "Vercel" }
];
const categories = [
    {
        icon: <FaCode />,
        title: "Frontend",
        tech: "React, Redux Toolkit, Tailwind CSS, HTML5, CSS3, JavaScript",
    },
    {
        icon: <FaServer />,
        title: "Backend",
        tech: "Node.js, Express.js, REST APIs, Socket.io",
    },
    {
        icon: <FaDatabase />,
        title: "Database",
        tech: "MongoDB, MongoDB Atlas, MySQL",
    },
    {
        icon: <FaTools />,
        title: "Tools",
        tech: "Git, GitHub, Postman, JWT, Render, Vercel",
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-[#12122D] py-20 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">


                <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#1B1B3A] border border-[#2A2950]">
                    <span className="text-[#A8E63D] font-medium">
                        What I work with
                    </span>
                </div>


                <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-[#A8E63D]">
                    Skills
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-12">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-[#1B1B3A] border border-[#2A2950] rounded-2xl p-5 flex items-center gap-4 hover:border-[#A8E63D] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="text-3xl text-[#A8E63D]">
                                {skill.icon}
                            </div>

                            <h3 className="text-white font-semibold">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-[#1B1B3A] border border-[#2A2950] rounded-3xl p-8 hover:border-[#A8E63D] transition-all duration-300"
                        >
                            <div className="text-[#A8E63D] text-4xl">
                                {category.icon}
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-white">
                                {category.title}
                            </h3>

                            <p className="mt-4 text-[#A7A7C7] leading-8">
                                {category.tech}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;