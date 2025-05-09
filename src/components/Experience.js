import React, { useState, useEffect } from 'react';
import experiences from './data/experienceData';

const Experience = () => {
    const [showAll, setShowAll] = useState(false);
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768); // 'md' in Tailwind

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);

    const toggleDescription = (index) => {
        setExpandedDescriptions((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section id="experience" className="bg-white dark:bg-black text-black dark:text-white py-16 pt-20 md:pt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-500 dark:text-green-400">Experience</h2>
                <div className="w-16 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
                <div className="relative">
                    {/* Timeline line */}
                    <div
                        className={`absolute top-0 bottom-0 h-full border-l-2 ${
                            isSmallScreen
                                ? "hidden"
                                : "left-1/2 transform -translate-x-1/2 border-black dark:border-green-400"
                        }`}
                    ></div>

                    {visibleExperiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`mb-10 flex items-start relative ${
                                isSmallScreen
                                    ? "flex-row"
                                    : index % 2 === 0
                                    ? "flex-row-reverse"
                                    : "flex-row"
                            }`}
                        >
                            {/* Timeline dot */}
                            <div
                                className={`w-4 h-4 rounded-full absolute ${
                                    isSmallScreen
                                        ? "left-5 top-6 bg-green-400"
                                        : "left-1/2 transform -translate-x-1/2 top-6 bg-black dark:bg-green-400"
                                }`}
                            ></div>

                            {/* Content Box */}
                            <div
                                className={`w-full md:w-1/2 ${
                                    isSmallScreen
                                        ? "pl-12 text-left"
                                        : index % 2 === 0
                                        ? "pl-6 text-left"
                                        : "pr-6 text-right"
                                }`}
                            >
                                <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-md">
                                    <h2 className="text-xl font-semibold">{exp.title} | {exp.company}</h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.date}</p>
                                    {exp.description && 
                                        <p>
                                            {!expandedDescriptions[index]
                                                ? exp.description.length > 150
                                                    ? `${exp.description.slice(0, 150)}...`
                                                    : <span><strong>Team:</strong> {exp.description}</span>
                                                : exp.description}
                                            {exp.description.length > 150 && (
                                                <button
                                                    className="text-blue-500 dark:text-blue-400 ml-2"
                                                    onClick={() => toggleDescription(index)}
                                                >
                                                    {expandedDescriptions[index] ? "Show Less" : "Read More"}
                                                </button>
                                            )}
                                        </p>
                                    }
                                    {/* Show technologies used in a single line */}
                                    {exp.technologies && exp.technologies.length > 0 && (
                                        <p>
                                            <strong>Technologies:</strong> {exp.technologies.join(', ')}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Read More button for showing all experiences */}
                {experiences.length > 3 && (
                    <div className="text-center mt-8">
                        <button
                            className="bg-gray-900 dark:bg-gray-800 text-white hover:text-green-400 font-bold py-2 px-4 rounded"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less" : "Read More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;