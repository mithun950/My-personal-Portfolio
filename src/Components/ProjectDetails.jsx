import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        const selectedProject = data.find(project => project.id.toString() === id.toString()); 
        setProject(selectedProject);
      });
  }, [id]);

  if (!project) return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="text-xl text-gray-600">Loading...</div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-cyan-600 to-indigo-700 text-white shadow-lg rounded-lg mt-10">
      <h2 className="text-4xl font-semibold text-center mb-4">{project.name}</h2>
      
      {/* Flex container for image and details */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <img 
          src={project.img} 
          alt={project.name} 
          className="w-full lg:w-1/2 rounded-md shadow-xl transition-transform transform hover:scale-105" 
        />
        
        <div className="w-full lg:w-1/2">
          <p className="mt-6 text-lg text-gray-300">{project.description}</p>
          
          <div className="mt-8 flex flex-wrap justify-center space-x-6 gap-4">
            <a 
              href={project.github_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-gray-800 text-cyan-400 rounded-full shadow-md hover:bg-gray-700 hover:text-white transition duration-300"
            >
              View on Github
            </a>
            <a 
              href={project.live_link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-gray-800 text-green-400 rounded-full shadow-md hover:bg-gray-700 hover:text-white transition duration-300"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
