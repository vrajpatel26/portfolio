import {
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";

const projects = [
    {
        title: "UniNotes",
        subtitle: "Centralized Academic Resource Platform",
        description:
            "A MERN stack platform that helps students access semester-wise study materials with Guest, Student, and Admin roles, secure JWT authentication, bookmarking, search, and an intuitive admin dashboard.",


        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "JWT Auth"
        ],

        github: "#",
        live: "#",
    },

    {
        title: "PulseChat",
        subtitle: "Real-time Chat Application",
        description:
            "A real-time MERN chat application featuring one-to-one messaging, online status, typing indicators, image and emoji sharing, Socket.IO-powered communication, and secure JWT authentication.",

        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux Toolkit",
            "Tailwind CSS",
            "Socket.io",
        ],

        github: "#",
        live: "#",
    },

    {
        title: "SikshaSetu",
        subtitle: "AI-Assisted LMS Platform",
        projectType: "Group Project",
        role: "Frontend Developer",
        description:
            "A full-stack Learning Management System featuring video-based learning, role-based access, Razorpay-powered course purchases, study materials, notes, progress tracking, an AI-powered chatbot, and voice search for discovering relevant courses.",

        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux Toolkit",
            "Tailwind CSS",
            "Razorpay",
        ],

        github: "https://github.com/yourusername/sikshasetu",
        live: "https://your-live-demo-link.com",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-[#12122D] py-20 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                {/* Badge */}

                <div className="inline-flex px-5 py-2 rounded-full bg-[#1B1B3A] border border-[#2A2950]">
                    <span className="text-[#A8E63D] font-medium">
                        Things I've Built
                    </span>
                </div>

                {/* Heading */}

                <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-[#A8E63D]">
                    Projects
                </h2>

                {/* Cards */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

                    {projects.map((project, index) => (

                        <div
                            key={project.title}
                            className={`bg-[#1B1B3A] border border-[#2A2950] rounded-3xl p-7 hover:border-[#A8E63D] hover:-translate-y-2 transition-all duration-300 ${index === 2 ? "lg:col-span-2 lg:max-w-4xl lg:mx-auto w-full" : ""
                                }`}
                        >

                            {/* Header */}

                            <div className="flex justify-between items-start">

                                <div>

                                    <h3 className="text-3xl font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-[#A8E63D] mt-2">
                                        {project.subtitle}
                                    </p>
                                    {project.projectType && (
                                        <div className="flex flex-wrap gap-2 mt-4">

                                            <span className="px-3 py-1 rounded-full bg-[#25254A] text-[#A8E63D] text-xs font-medium">
                                                👥 {project.projectType}
                                            </span>

                                            <span className="px-3 py-1 rounded-full bg-[#25254A] text-white text-xs font-medium">
                                                👤 {project.role}
                                            </span>

                                        </div>
                                    )}
                                </div>

                            

                            </div>

                            {/* Description */}

                            <p className="text-[#C2C2DE] mt-8 leading-8">
                                {project.description}
                            </p>


                            {/* Tech */}

                            <div className="flex flex-wrap gap-3 mt-8">

                                {project.tech.map((tech) => (

                                    <span
                                        key={tech}
                                        className="bg-[#25254A] text-[#A8E63D] px-4 py-2 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>

                                ))}

                            </div>

                            {/* Buttons */}

                            <div className="flex gap-4 mt-8">

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 border border-[#2A2950] rounded-xl py-3 flex justify-center items-center gap-2 text-white hover:border-[#A8E63D] transition"
                                >
                                    <FaGithub />

                                    Code
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 bg-[#A8E63D] text-[#12122D] rounded-xl py-3 flex justify-center items-center gap-2 font-semibold hover:scale-105 transition"
                                >
                                    <FaExternalLinkAlt />

                                    Live
                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;