import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee"; // Import react-fast-marquee

const Skills = () => {
  const skills = [
    { logo: "/src/assets/htmlicon.ico", level: "HTML5", count: 91 },
    { logo: "../assets/68747470733a2cssicon.png", level: "CSS3", count: 90 },
    { logo: "../assets/tailwind.svg.png", level: "Tailwind CSS", count: 90 },
    { logo: "../assets/reacticon.png", level: "React JS", count: 80 },
    { logo: "../assets/firebase.png", level: "Firebase", count: 85 },
    { logo: "../assets/nodejs.webp", level: "Node JS", count: 85 },
    { logo: "../assets/js.png", level: "JavaScript", count: 78 },
  ];

  const [progress, setProgress] = useState([]);

  
  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setProgress((prev) => {
          const updated = [...prev];
          if (!updated[index]) updated[index] = 0;
          if (updated[index] < skill.count) updated[index] += 2; // Speed up animation
          return updated;
        });
      }, 10); 
    });

    return () => intervals.forEach(clearInterval);
  }, [skills]);

  return (
    <section id="skills" className="py-10 bg-gray-800 relative overflow-hidden">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="relative mt-12">
          {/* React Marquee */}
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            
          >
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group ml-6 mr-2 border-2 border-cyan-600 bg-gray-900 p-10 rounded-xl transition-transform hover:scale-105"
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${
                      progress[i] || 0
                    }%,#ddd ${progress[i] || 0}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full relative"
                >
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    <img className="w-20 h-20" src={skill.logo} alt="" />
                  </div>
                  <span
                    className="absolute -top-8 -right-6 p-2 text-xl text-md font-bold text-gray-300"
                  >
                    {progress[i]}%
                  </span>
                </div>
                <p className="text-xl mt-3">{skill.level}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
