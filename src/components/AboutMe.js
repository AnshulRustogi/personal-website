import React, { useState, useEffect } from "react";
import aboutMeConfig from './data/aboutMe';

export default function AboutMe() {
    const [text, setText] = useState(""); // State to hold the typed text
    const [isBlinking, setIsBlinking] = useState(true); // State for blinking cursor

    useEffect(() => {
        let typingTimeout;
        let blinkingTimeout;

        // Typing effect
        if (text.length < aboutMeConfig.name.length) {
            typingTimeout = setTimeout(() => {
                setText(aboutMeConfig.name.slice(0, text.length + 1));
            }, 150); // Typing speed
        } else {
            // Start blinking cursor after typing is complete
            blinkingTimeout = setInterval(() => {
                setIsBlinking((prev) => !prev);
            }, 500); // Blinking speed
        }

        return () => {
            clearTimeout(typingTimeout);
            clearInterval(blinkingTimeout);
        };
    }, [text]);

    return (
        <section
            id="about-me"
            className="bg-white dark:bg-black text-black dark:text-white h-screen flex justify-center items-center pt-32 md:pt-0"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* About Text */}
                    <div className="md:w-1/2 md:pr-8">
                        <h2 className="text-4xl font-extrabold mb-6 text-green-400">
                            {text}
                            <span
                                className={`${
                                    isBlinking ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                |
                            </span>
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                            {aboutMeConfig.description}
                        </p>
                        {/* Download Resume Button */}
                        {aboutMeConfig.resumeLink && (
                            <a
                                href={aboutMeConfig.resumeLink}
                                download="Anshul_Rustogi_Resume.pdf"
                                className="inline-block bg-green-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-600 transition"
                            >
                                Download Resume
                            </a>
                        )}
                    </div>

                    {/* Profile Image */}
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img
                            src={aboutMeConfig.image}
                            alt={aboutMeConfig.name}
                            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-gray-300 dark:border-gray-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

