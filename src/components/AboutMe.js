import React, { useState, useEffect } from "react";

export default function AboutMe() {
    const [text, setText] = useState(""); // State to hold the typed text
    const fullText = "Anshul Rustogi"; // Full text to type
    const [isBlinking, setIsBlinking] = useState(true); // State for blinking cursor

    useEffect(() => {
        let typingTimeout;
        let blinkingTimeout;

        // Typing effect
        if (text.length < fullText.length) {
            typingTimeout = setTimeout(() => {
                setText(fullText.slice(0, text.length + 1));
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
    }, [text, fullText]);

    return (
        <section id="about-me" className="bg-white dark:bg-black text-black dark:text-white py-16 pt-20 md:pt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* About Text */}
                    <div className="md:w-1/2 md:pr-8">
                        <h2 className="text-3xl font-bold mb-4 text-green-400 ">
                            {text}
                            <span
                                className={`${
                                    isBlinking ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                |
                            </span>
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            I am a passionate software engineer with a strong background in web development and a keen interest in machine learning. I enjoy solving complex problems and building efficient, scalable applications. My goal is to leverage technology to create innovative solutions that make a positive impact on people's lives.
                        </p>
                    </div>

                    {/* Profile Image */}
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                        <img
                            src="https://placehold.co/600x600/EEE/31343C"
                            alt="Anshul Rustogi"
                            className="rounded-full w-48 h-48 object-cover border-4 border-gray-300 dark:border-gray-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

