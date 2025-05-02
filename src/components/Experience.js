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
        <section className="bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
                <div className="relative">
                    {/* Timeline line */}
                    <div
                        className={`absolute top-0 bottom-0 h-full border-l-2 border-gray-600 ${
                            isSmallScreen ? "hidden" : "left-1/2 transform -translate-x-1/2"
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
                                className={`w-4 h-4 bg-gray-600 rounded-full absolute ${
                                    isSmallScreen
                                        ? "left-5 top-6"
                                        : "left-1/2 transform -translate-x-1/2 top-6"
                                }`}
                            ></div>

                            {/* Content */}
                            <div
                                className={`w-full md:w-1/2 ${
                                    isSmallScreen
                                        ? "pl-12 text-left"
                                        : index % 2 === 0
                                        ? "pl-6 text-left"
                                        : "pr-6 text-right"
                                }`}
                            >
                                <h3 className="text-xl font-semibold">{exp.title} at {exp.company}</h3>
                                <p className="text-gray-400 text-sm">{exp.date}</p>
                                <p className="mt-2 text-gray-300">
                                    {!expandedDescriptions[index]
                                        ? `${exp.description.slice(0, 100)}...`
                                        : exp.description}
                                    {exp.description.length > 100 && (
                                        <button
                                            className="text-blue-500 ml-2"
                                            onClick={() => toggleDescription(index)}
                                        >
                                            {expandedDescriptions[index] ? "Show Less" : "Read More"}
                                        </button>
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Read More button for showing all experiences */}
                {experiences.length > 3 && (
                    <div className="text-center mt-8">
                        <button
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
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
