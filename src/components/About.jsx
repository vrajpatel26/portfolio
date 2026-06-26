import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaBriefcase,
} from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="bg-[#12122D] py-20 scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

               

                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10">
                    About <span className="text-[#A8E63D]">Me</span>
                </h2>

              

                <div className="bg-[#1B1B3A] border border-[#2A2950] rounded-3xl p-6 sm:p-8 lg:p-10">

                    <p className="text-[#C2C2DE] text-base sm:text-lg leading-8 sm:leading-10">
                        Aspiring{" "}
                        <span className="text-[#A8E63D] font-semibold">
                            MERN Stack Developer
                        </span>{" "}
                        with hands-on experience building full-stack web applications
                        including real-time chat platforms, authentication systems,
                        and academic resource portals. Proficient in React.js,
                        Node.js, Express.js, MongoDB, Redux Toolkit, with a strong
                        foundation in REST API design, JWT authentication and
                        responsive UI development.
                    </p>

                   

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">

                       

                        <div className="bg-[#171733] border border-[#2A2950] rounded-2xl p-6 flex items-start gap-4">

                            <FaMapMarkerAlt className="text-[#A8E63D] text-2xl mt-1" />

                            <div>
                                <p className="uppercase tracking-[3px] text-xs text-gray-400">
                                    Location
                                </p>

                                <h3 className="text-white font-semibold mt-2">
                                    Gandhinagar, Gujarat
                                </h3>
                            </div>

                        </div>

                        

                        <div className="bg-[#171733] border border-[#2A2950] rounded-2xl p-6 flex items-start gap-4">

                            <FaPhoneAlt className="text-[#A8E63D] text-2xl mt-1" />

                            <div>
                                <p className="uppercase tracking-[3px] text-xs text-gray-400">
                                    Phone
                                </p>

                                <h3 className="text-white font-semibold mt-2">
                                    +91 8866152132
                                </h3>
                            </div>

                        </div>

                        

                        <div className="bg-[#171733] border border-[#2A2950] rounded-2xl p-6 flex items-start gap-4">

                            <FaEnvelope className="text-[#A8E63D] text-2xl mt-1" />

                            <div>
                                <p className="uppercase tracking-[3px] text-xs text-gray-400">
                                    Email
                                </p>

                                <h3 className="text-white font-semibold mt-2 break-all">
                                    vraj.261604@gmail.com
                                </h3>
                            </div>

                        </div>

                    </div>

                </div>

                

                <div className="flex items-center gap-3 mt-16 mb-8">

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
                            • Built 5+ reusable UI components in React.js,
                            improving code reusability.
                        </li>

                        <li>
                            • Implemented frontend features using JavaScript,
                            HTML5, CSS3 and React.js.
                        </li>

                        <li>
                            • Integrated REST APIs using React Hooks and
                            Context API.
                        </li>

                        <li>
                            • Used Git and GitHub for collaborative
                            version control.
                        </li>

                    </ul>

                </div>

            </div>
        </section>
    );
};

export default About;