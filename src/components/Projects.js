/* 
Create a beautiful and creative project section for the portfolio website using React and Tailwind CSS.
The project section should include the following features:
1. A title "Projects".
2. A list of projects with descriptions and links.
3. A responsive design that looks good on both desktop and mobile devices.
4. Use Tailwind CSS for styling and animations.
*/

import React from 'react';
import project from './data/projectData';

const Projects = () => {
    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-400 font-bold"
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
