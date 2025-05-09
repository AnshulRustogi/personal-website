import React from 'react';
import project from './data/projectData';

const Projects = () => {
    return (
        <section id="projects" className="bg-white dark:bg-black text-black dark:text-white py-16 pt-20 md:pt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-500 dark:text-green-400">Projects</h2>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
                <div className="space-y-8">
                    {project.map((proj, index) => (
                        <ProjectCard key={index} proj={proj} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ proj }) => {
    // const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden lg:p-4">
            {/* Project Image */}
            {proj.image && (
                <div className="w-full md:w-1/3 h-48 md:h-auto">
                    {/* <img */}
                    <img
                        src={proj.image}
                        alt={proj.title}
                        style={{ aspectRatio: '1 / 1' }}
                        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                </div>
            )}

            {/* Project Details */}
            <div className="w-full md:w-2/3 p-6 lg:p-4">
                <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4 font-sans">
                        {proj.description}
                </p>
                <div className="mb-4">
                    <h4 className="font-semibold text-bold text-gray-700 dark:text-gray-400 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                        {proj.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-green-500 px-4 py-2 rounded-lg hover:text-green-400 transition transform hover:scale-105"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

export default Projects;
