import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  const info = [
    { text: "Years of Experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Worked", count: "06" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                As a Computer Science and Engineering student, I have always been fascinated by the endless possibilities of technology. My journey in programming began with simple curiosity, but over time, it evolved into a deep passion. From solving small bugs to tackling complex problems, every step taught me resilience and the joy of creating something impactful.
                <br />
                I take coding seriously, as it’s not just about writing code—it’s about solving real-world problems. Beyond academics, I actively participate in coding challenges and projects to refine my skills. When I’m not programming, I enjoy painting and playing sports, which refresh my mind and keep my creativity alive.
                <br />
                My goal is to continuously grow, contribute to meaningful projects, and inspire others to embrace the exciting world of technology.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt="About Me"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
