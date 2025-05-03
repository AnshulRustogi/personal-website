/* 
Create a buitiful and creative skills section for the portfolio website using React and Tailwind CSS.
The skills section should include the following features:
1. A title "Skills".
2. A list of skills with icons.
4. A responsive design that looks good on both desktop and mobile devices.
5. Use Tailwind CSS for styling and animations.
*/

import React from 'react';
import skills from './data/skillData';

const Skills = () => {
    return (
        <section id="skills" className="bg-white dark:bg-black text-black dark:text-white py-16 pt-20 md:pt-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-center">Core Skills</h2>
                <div className="w-16 h-1 bg-green-400 mx-auto mb-8"></div>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md
                            transition-transform transform hover:scale-105"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-6 h-6"
                            />
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
