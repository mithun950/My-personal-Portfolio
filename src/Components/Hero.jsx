import React from "react";
import hero from "../assets/hero.png";
import { FaDownload } from "react-icons/fa";
import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Hero = () => {
  const social_media = [
    { icon: <IoLogoInstagram />, link: "https://www.instagram.com" },
    { icon: <IoLogoFacebook />, link: "https://www.facebook.com" },
    { icon: <IoLogoLinkedin />, link: "https://www.linkedin.com" },
    { icon: <IoLogoTwitter />, link: "https://www.twitter.com" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full order-last  md:order-first">
        <img src={hero} alt="" className="md:w-11/12 mx-auto h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center mt-8 w-11/12 mx-auto">
          <h1 className="md:text-2xl text-xl md:leading-normal leading-8 text-white font-bold">
            <span className="text-cyan-600 md:text-5xl text-3xl">
              Frontend Developer
              <br />
            </span>
            Hi, I'm Methunur Rashid
          </h1>
          <p className="md:text-xl text-sm md:leading-normal leading-5 mt-4 font-semibold text-gray-600">
            I specialize in building responsive, user-friendly websites and applications. With a keen eye for detail and a love for modern technologies, I create seamless digital experiences.
          </p>
          
          {/* Download Resume Button with link */}
          <a href="/path/to/your/resume.pdf" download>
            <button className="btn-primary mt-8 flex items-center gap-2">
              <FaDownload /> Download Resume
            </button>
          </a>
          
          <div className="mt-8 text-2xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
