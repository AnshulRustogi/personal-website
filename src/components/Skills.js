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
        <section className="bg-white dark:bg-black text-black dark:text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md
                            transition-transform transform hover:scale-105"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-8 h-8 mr-2"
                            />
                            <span className="text-lg font-semibold">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
