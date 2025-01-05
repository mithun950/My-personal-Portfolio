import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom"; 
import project_person from "../assets/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import { Pagination, Autoplay } from "swiper/modules"; 

const Project = () => {

    const [projects, setProjects] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, []);

    const handleViewDetails = (projectId) => {
        navigate(`/project-details/${projectId}`); 
    };

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            key={projects.length} 
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl relative overflow-hidden group">


            
                  <img
                    src={project_info.img}
                    alt=""
                    className="rounded-lg transition-all duration-300 group-hover:blur-sm group-hover:scale-105 group-hover:translate-y-[-60%]"
                  />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                   
                   
                    {/* Github Link Button */}
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-4 py-2 rounded-md hover:bg-cyan-600 hover:text-white transition-all duration-300"
                    >
                      Github
                    </a>



                    {/* Live  Button */}
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-4 py-2 rounded-md hover:bg-cyan-600 hover:text-white transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  </div>
                 
                 
                 
                  {/* View Details Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="text-white bg-cyan-600 px-4 py-2 rounded-md"
                      onClick={() => handleViewDetails(project_info.id)} 
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
