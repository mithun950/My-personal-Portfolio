import React, { useEffect, useState } from "react";

const Skills = () => {
  const skills = [
    { logo: "/src/assets/react.png", level: "Advanced", count: 86 },
    { logo: "/src/assets/react.png", level: "Expert", count: 90 },
    { logo: "/src/assets/react.png", level: "Intermediate", count: 80 },
    { logo: "/src/assets/react.png", level: "Intermediate", count: 75 },
    { logo: "/src/assets/react.png", level: "Beginner", count: 50 },
    { logo: "/src/assets/react.png", level: "Beginner", count: 45 },
    { logo: "/src/assets/react.png", level: "Advanced", count: 85 },
  ];

  const [progress, setProgress] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null); // For individual card hover effect

  // Progress Bar Calculation
  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setProgress((prev) => {
          const updated = [...prev];
          if (!updated[index]) updated[index] = 0;
          if (updated[index] < skill.count) updated[index] += 2; // Speed up the animation
          if (updated[index] >= 100) clearInterval(intervals[index]); // Stop when progress reaches 100%
          return updated;
        });
      }, 10); // Adjust speed here (lower is faster)
    });

    return () => intervals.forEach(clearInterval);
  }, [skills]);

  // Active Card Animation
  useEffect(() => {
    if (isHovered === null || isHovered === false) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % skills.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [skills.length, isHovered]);

  return (
    <section
      id="skills"
      className="py-10 bg-gray-800 relative overflow-hidden"
    >
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex gap-10"
            style={{
              animation: isHovered === null || isHovered === false ? "scroll 20s linear infinite" : "none", // Disable scrolling on hover
            }}
          >
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`group border-2 border-cyan-600 bg-gray-900 p-10 rounded-xl transition-transform ${
                  activeIndex === i ? "animate-bounce-up" : ""
                } hover:scale-105`}
                onMouseEnter={() => setIsHovered(i)} // Set hover to active card
                onMouseLeave={() => setIsHovered(null)} // Reset hover
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
                    <img src={skill.logo} alt="" />
                  </div>
                  <span
                    className="absolute -top-8 -right-6 p-2 text-xl text-md font-bold text-gray-300"
                    style={{ transform: "translate(5px, -5px)" }}
                  >
                    {progress[i]}%
                  </span>
                </div>
                <p className="text-xl mt-3">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes bounce-up {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-bounce-up {
          animation: bounce-up 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;
