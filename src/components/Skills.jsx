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
    SiVercel,
} from "react-icons/si";

const categories = [
    {
        icon: <FaCode />,
        title: "Frontend",
        subtitle: "Building beautiful interfaces",
        skills: [
            { icon: <FaReact />, name: "React.js" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <SiRedux />, name: "Redux Toolkit" },
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3Alt />, name: "CSS3" },
        ],
    },
    {
        icon: <FaServer />,
        title: "Backend",
        subtitle: "Powering scalable APIs",
        skills: [
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express.js" },
            { icon: <FaServer />, name: "REST API" },
            { icon: <FaDatabase />, name: "JWT Authentication" },
            { icon: <FaServer />, name: "Socket.io" },
        ],
    },
    {
        icon: <FaDatabase />,
        title: "Database",
        subtitle: "Managing persistent data",
        skills: [
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiMysql />, name: "MySQL" },
        ],
    },
    {
        icon: <FaTools />,
        title: "Tools",
        subtitle: "Shipping production apps",
        skills: [
            { icon: <FaGitAlt />, name: "Git" },
            { icon: <SiPostman />, name: "Postman" },
            { icon: <SiRender />, name: "Render" },
            { icon: <SiVercel />, name: "Vercel" },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-[#12122D] py-10 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                {/* Heading */}

                <div className="text-center">

                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#1B1B3A] border border-[#2A2950]">
                        <div className="w-8 h-[2px] bg-[#A8E63D]"></div>

                        <span className="text-[#A8E63D] font-medium">
                            What I Work With
                        </span>

                        <div className="w-8 h-[2px] bg-[#A8E63D]"></div>
                    </div>

                    <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-white">
                        Technical <span className="text-[#A8E63D]">Skills</span>
                    </h2>

                    <p className="mt-5 max-w-2xl mx-auto text-[#A7A7C7] text-lg leading-8">
                        Technologies and tools I use to build responsive,
                        scalable, and production-ready web applications.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

                    {categories.map((category) => (

                        <div
                            key={category.title}
                            className="bg-[#1B1B3A] border border-[#2A2950] rounded-3xl p-8 hover:border-[#A8E63D] hover:-translate-y-2 transition-all duration-300 h-full"
                        >

                            {/* Card Icon */}

                            <div className="text-[#A8E63D] text-5xl">
                                {category.icon}
                            </div>

                            {/* Title */}

                            <h3 className="mt-6 text-3xl font-bold text-white">
                                {category.title}
                            </h3>

                            {/* Subtitle */}

                            <p className="mt-2 text-sm text-[#8F8FB3]">
                                {category.subtitle}
                            </p>

                            {/* Divider */}

                            <div className="w-14 h-[3px] rounded-full bg-[#A8E63D] mt-5 mb-8"></div>

                            {/* Skills */}

                           <div className="space-y-5">

                                {category.skills.map((skill) => (

                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-4 group"
                                    >

                                        <div className="text-2xl text-[#A8E63D] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                            {skill.icon}
                                        </div>

                                        <span className="text-white font-medium transition-colors duration-300 group-hover:text-[#A8E63D]">
                                            {skill.name}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills; 