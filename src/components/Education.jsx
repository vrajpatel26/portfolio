import { FaGraduationCap, FaAward } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institute: "LDRP Institute of Technology & Research",
    duration: "2022 – 2026",
    score: "CGPA: 7.9 / 10",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institute: "S.V. High School, Kadi",
    duration: "2021 – 2022",
    score: "79%",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institute: "S.V. High School, Kadi",
    duration: "2019 – 2020",
    score: "82%",
  },
];

const achievements = [
  "NPTEL Python for Data Science — Silver Elite Certificate"
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#12122D] py-20 scroll-mt-10"
    >
      <div className="max-w-7xl flex flex-col items-center lg:items-start mx-auto px-5 sm:px-8 lg:px-10">


        <div className="inline-flex px-5 py-2 rounded-full bg-[#1B1B3A] border border-[#2A2950]">
          <span className="text-[#A8E63D] font-medium">
            My Academic Background
          </span>
        </div>


        <h2 className="mt-5 text-4xl sm:text-5xl font-bold text-[#A8E63D]">
          Education
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

          {education.map((item) => (

            <div
              key={item.degree}
              className="bg-[#1B1B3A] border border-[#2A2950] rounded-3xl p-7 hover:border-[#A8E63D] transition-all duration-300 hover:-translate-y-2"
            >

              <FaGraduationCap className="text-3xl text-[#A8E63D]" />

              <h3 className="mt-6 text-2xl font-bold text-white leading-snug">
                {item.degree}
              </h3>

              <p className="mt-3 text-[#C2C2DE]">
                {item.institute}
              </p>

              <div className="flex justify-between items-center mt-8">

                <span className="text-[#8E8EB4]">
                  {item.duration}
                </span>

                <span className="bg-[#A8E63D] text-[#12122D] px-4 py-2 rounded-full text-sm font-bold">
                  {item.score}
                </span>

              </div>

            </div>

          ))}

        </div>


        <div className="flex items-center gap-3 mt-16">

          <FaAward className="text-[#A8E63D] text-3xl" />

          <h3 className="text-3xl font-bold text-white">
            Achievements
          </h3>

        </div>

        <div className="bg-[#1B1B3A] border border-[#2A2950] rounded-3xl p-6 mt-8">

          <ul className="space-y-5">

            {achievements.map((item) => (

              <li
                key={item}
                className="text-[#C2C2DE] text-lg flex items-start gap-3"
              >

                <span className="text-[#A8E63D] ">
                  •
                </span>

                {item}

              </li>

            ))}

          </ul>

        </div>

      </div>
    </section>
  );
};

export default Education;