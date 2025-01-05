import React from "react";

const Education = () => {
  // WhatsApp Message Link
  const handleWhatsApp = () => {
    const phone = "01943252411"; 
    const message = encodeURIComponent(
      "Hello! I want to discuss some work opportunities with you."
    );
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section id="education" className="py-10 px-5 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Education</span>
        </h3>
        <p className="text-gray-200 mt-3 text-lg">Where I gained my knowledge</p>
      </div>

      {/* Glass effect card container */}
      <div className="lg:max-w-4xl mx-auto mt-24 space-y-8">
        <div className="bg-gray-700 bg-opacity-60 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold text-white">Juranpur Adorsho University College</h4>
            <p className="text-gray-300 text-sm mt-2">Science - Completed</p>
          </div>
          <div className="md:w-1/3 text-center mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">2019 - 2021</p>
          </div>
        </div>

        <div className="bg-gray-700 bg-opacity-60 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold text-white">Dhaka International University</h4>
            <p className="text-gray-300 text-sm mt-2">CSE - 2022-2023 Session (Running)</p>
          </div>
          <div className="md:w-1/3 text-center mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">2022 - Present</p>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="text-center mt-12">
        <button
          onClick={handleWhatsApp}
          className="bg-cyan-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-cyan-700 transition duration-300"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Education;
