import profile from "../assets/profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#12122D] min-h-[calc(100vh-80px)] flex items-center scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-10 py-10">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">

         

          <div className="order-2 lg:order-1">

            

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1B1B3A] border border-white/10">

              <span className="w-2.5 h-2.5 rounded-full bg-[#A8E63D] animate-pulse"></span>

              <p className="text-[#A8E63D] text-sm font-medium">
                Available for opportunities
              </p>

            </div>

           

            <h1 className="mt-8 text-white font-extrabold leading-tight text-5xl sm:text-6xl lg:text-6xl lg:w-[70%]">

              Hi, I'm{" "}

              <span className="text-[#A8E63D]">
                Vraj Patel
              </span>

              <br />

              MERN Stack

              <br />

              Developer

            </h1>

           

            <p className="mt-8 max-w-xl text-[#A7A7C7] text-base md:text-lg leading-8">

              I build full-stack web applications — from
              real-time chat platforms to authentication
              systems and academic portals — with React,
              Node.js, Express.js and MongoDB.

            </p>

            

            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <a
                href="#projects"
                className="bg-[#A8E63D] text-[#12122D] font-semibold px-8 py-4 rounded-full shadow-[0_0_30px_rgba(168,230,61,.35)] hover:scale-105 transition duration-300 text-center"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-[#2A2950] text-white px-8 py-4 rounded-full hover:bg-[#1B1B3A] transition duration-300 text-center"
              >
                Contact Me
              </a>

            </div>

           

            <div className="flex gap-7 mt-12 text-3xl text-[#8D8DB2]">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0A66C2] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:example@gmail.com"
                className="hover:text-[#A8E63D] transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

         

          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative">

              

              <div className="absolute inset-0 rounded-full bg-[#A8E63D]/10 blur-3xl"></div>

             

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full border-[4px] border-[#A8E63D] overflow-hidden">

                <img
                  src={profile}
                  alt="Vraj Patel"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;