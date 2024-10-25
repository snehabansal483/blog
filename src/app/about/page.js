// components/About.js
import React from 'react';


const projects = [
  {
    title: "Fitness Tracker Chatbot",
    description: "A virtual assistant designed to help users monitor and improve their fitness routines.",
    image: "/img/fitnesstracker.png", // Replace with your actual image path
    link: "https://fitness-alpha-roan.vercel.app/", // Replace with your project link
  },
  {
    title: "Sorting Visualization",
    description: "An interactive visualization tool for understanding sorting algorithms.",
    image: "/img/sorting-visualisation.png", // Replace with your actual image path
    link: "https://dsatutorial.vercel.app/sorting_main.html", // Replace with your project link
  },
  {
    title: "Mascot Landing Page",
    description: "A fully responsive landing page showcasing a brand mascot.",
    image: "/img/mascot-landing.png", // Replace with your actual image path
    link: "https://task-5-final.vercel.app/", // Replace with your project link
  },
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">

      
      <h2 className="text-4xl font-bold text-center mb-6 mt-4 text-blue-700 animate-bounce">About This Blog</h2>
      <p className="text-center mb-4">
        Dive into the world of web development and explore our insights and resources!
      </p>

      <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-8">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="/img/about.jpg" // Replace with an actual image path
            alt="About"
            className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">Welcome to Our Blog!</h3>
          <p className=" mb-4">
            This blog is dedicated to sharing insights, tutorials, and resources on web development, 
            programming, and design. Our goal is to provide valuable content that helps you grow your skills 
            and stay updated with the latest trends in technology.
          </p>
          <p className="mb-4">
            We cover a wide range of topics, including React, Next.js, CSS, JavaScript, and more. 
            Whether you are a beginner or an experienced developer, we have something for everyone!
          </p>
          <p className="mb-4">
            Join us on this journey, and let's explore the world of web development together!
          </p>
        </div>
      </div>

      {/* Project Showcase Section */}
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-700 animate-pulse">Project Showcase</h2>
      <p className="text-center">
        Check out some of the amazing projects we've worked on!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className=" mt-2">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
