import {
    FaEnvelope,
    FaArrowDown,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-[#12122D] scroll-mt-10 border-t border-[#2A2950]"
        >

            <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 text-center">

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Let's{" "}
                    <span className="text-[#A8E63D]">
                        Work Together
                    </span>
                </h2>

                <p className="mt-8 text-[#A7A7C7] text-lg leading-9 max-w-3xl mx-auto">
                    I'm currently looking for
                    <span className="text-white font-medium"> Frontend Developer,</span>
                    <span className="text-white font-medium"> Full Stack Developer</span>
                    {" "}and
                    <span className="text-white font-medium"> MERN Stack Developer</span>
                    {" "}opportunities. If you're building something great and need
                    a developer who writes clean code and ships fast —
                    let's talk.
                </p>


                <a href="mailto:vraj.261604@gmail.com"
                    className="inline-flex items-center gap-6 mt-14 bg-[#1B1B3A] border border-[#2A2950] rounded-full px-8 py-5 hover:border-[#A8E63D] hover:scale-105 transition-all duration-300"
                >
                    <div className="w-14 h-14 rounded-full bg-[#25254A] flex items-center justify-center">
                        <FaEnvelope className="text-[#A8E63D] text-xl" />
                    </div>
                    <div className="text-left">
                        <p className="uppercase tracking-[3px] text-xs text-[#8E8EB4]">
                            Drop me a line
                        </p>
                        <h3 className="text-white font-semibold text-lg">
                            vraj.261604@gmail.com
                        </h3>
                    </div>
                </a>

            </div>


            <div className="border-t border-[#2A2950]" />


            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">

                <div className="grid lg:grid-cols-2 gap-16">


                    <div>

                        <h2 className="text-4xl font-bold text-white">

                            <span className="text-[#A8E63D]">
                                VRAJ
                            </span>{" "}

                            PATEL

                        </h2>

                        <p className="mt-3 text-[#A8E63D] font-medium">
                            MERN Stack Developer
                        </p>

                        <p className="mt-8 text-[#A7A7C7] leading-9 text-lg">
                            A MERN Stack Developer who builds fast, scalable and
                            production-ready web applications — writing clean code,
                            solving real problems, and delivering results that matter.
                        </p>

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center gap-4">

                                📞

                                <span className="text-white">
                                    +91 8866152132
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                📍

                                <span className="text-white">
                                    Gandhinagar, Gujarat
                                </span>

                            </div>


                        </div>

                    </div>


                    <div>

                        <h3 className="text-sm uppercase tracking-[3px] text-[#8E8EB4] mb-8">
                            Find Me On
                        </h3>

                        <div className="space-y-6">


                            <a
                                href="https://www.linkedin.com/in/vraj-patel-3b94542a4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 bg-[#1B1B3A] border border-[#2A2950] rounded-2xl p-5 hover:border-[#A8E63D] transition-all duration-300"
                            >

                                <div className="w-14 h-14 rounded-xl bg-[#25254A] flex items-center justify-center text-[#A8E63D] text-2xl">
                                    💼
                                </div>

                                <div>

                                    <h4 className="text-white font-semibold text-lg">
                                        LinkedIn
                                    </h4>

                                    <p className="text-[#8E8EB4] text-sm">
                                        linkedin.com/in/vrajpatel
                                    </p>

                                </div>

                            </a>


                            <a
                                href="https://github.com/vrajpatel26"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 bg-[#1B1B3A] border border-[#2A2950] rounded-2xl p-5 hover:border-[#A8E63D] transition-all duration-300"
                            >

                                <div className="w-14 h-14 rounded-xl bg-[#25254A] flex items-center justify-center text-[#A8E63D] text-2xl">
                                    💻
                                </div>

                                <div>

                                    <h4 className="text-white font-semibold text-lg">
                                        GitHub
                                    </h4>

                                    <p className="text-[#8E8EB4] text-sm">
                                        github.com/vrajpatel
                                    </p>

                                </div>

                            </a>


                            <a
                                href="/Vraj_Patel_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 bg-[#1B1B3A] border border-[#2A2950] rounded-2xl p-5 hover:border-[#A8E63D] transition-all duration-300"
                            >

                                <div className="w-14 h-14 rounded-xl bg-[#25254A] flex items-center justify-center text-[#A8E63D] text-2xl">
                                    📄
                                </div>

                                <div>

                                    <h4 className="text-white font-semibold text-lg">
                                        Resume
                                    </h4>

                                    <p className="text-[#8E8EB4] text-sm">
                                        Download Resume
                                    </p>

                                </div>

                            </a>

                        </div>

                    </div>

                </div>


                <div className="border-t border-[#2A2950] mt-16 pt-10 flex justify-center">

                    <a
                        href="#home"
                        className="inline-flex items-center gap-3 border border-[#2A2950] rounded-xl px-8 py-4 text-white hover:border-[#A8E63D] hover:text-[#A8E63D] transition-all duration-300"
                    >

                        ↑

                        Back to Top

                    </a>

                </div>

            </div>

        </section >
    );
};

export default Contact;