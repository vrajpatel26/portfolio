const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen  overflow-hidden flex items-center justify-center scroll-mt-20 py-12 sm:py-16"
    >
      {/* ================= Background Glow ================= */}


      {/* ================= Grid ================= */}
       {/* Top left glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#A8E63D]/10 blur-[120px] pointer-events-none" />

      {/* Top right glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#A8E63D]/10 blur-[100px] pointer-events-none" />

      
      
      {/* ================= Hero ================= */}
      <div className="relative z-10 w-full max-w-[920px] mx-auto px-6 text-center -mt-10">

        {/* Heading */}
        <h1 className="font-black leading-12 tracking-normal">

          <span className="block leading-none text-white text-[42px] sm:text-[52px] md:text-[62px] lg:text-[70px] xl:text-[78px]">
            Hi, I'm Vraj Patel
          </span>

          <span className="block leading-none text-[#C8F031] text-[42px] sm:text-[52px] md:text-[62px] lg:text-[70px] xl:text-[78px]">
            MERN Stack
          </span>

          <span className="block leading-none text-white text-[42px] sm:text-[52px] md:text-[62px] lg:text-[70px] xl:text-[78px]">
            Developer
          </span>

        </h1>


        {/* Description */}
        <p className="mt-8 max-w-[560px] mx-auto text-[17px] md:text-[18px] leading-[1.7] text-[#AEB3C3]">
          I turn ideas into powerful digital products — building full-stack
          web applications with clean architecture, real-time features, and
          seamless user experiences using{" "}
          <span className="text-[#C8F031] font-semibold">
            React, Node.js, Express.js
          </span>{" "}
          and{" "}
          <span className="text-[#C8F031] font-semibold">
            MongoDB.
          </span>
        </p>


        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#C8F031] px-8 py-[14px] text-base font-semibold text-[#060B16] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(200,240,49,.35)]"
          >
            View Projects

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>

          </a>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#343C52] bg-[#111827]/40 px-8 py-[14px] text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#C8F031] hover:bg-white/5"
          >
            Contact Me

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>

          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;