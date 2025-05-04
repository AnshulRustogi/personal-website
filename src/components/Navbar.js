import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleTheme }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize the toggle state based on the saved theme
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        // Sync the toggle state with the current theme
        const currentTheme = localStorage.getItem('theme') || 'light';
        setIsDarkMode(currentTheme === 'dark');
    }, []);

    const handleToggleTheme = () => {
        toggleTheme(); // Call the toggle function from the parent
        setIsDarkMode((prev) => !prev); // Update the toggle state
    };

    return (
        <nav className="bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200 p-4 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-mono font-bold">
                    <span className="text-green-400">{'>'}</span> Backend Engineer
                </div>

                {/* Navigation Links and Theme Toggle */}
                <div className="hidden lg:flex items-center space-x-6 font-mono">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#about-me" className="hover:text-green-400 transition">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="hover:text-green-400 transition">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-green-400 transition">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-green-400 transition">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-green-400 transition">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Theme Toggle */}
                    <div
                        className={`relative w-20 h-10 rounded-full cursor-pointer transition-colors ${
                            isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                        }`}
                        onClick={handleToggleTheme}
                    >
                        <div
                            className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-md transform transition-transform ${
                                isDarkMode ? 'translate-x-10' : 'translate-x-0'
                            }`}
                        >
                            {isDarkMode ? (
                                <span className="flex justify-center items-center h-full w-full">🌑</span>
                            ) : (
                                <span className="flex justify-center items-center h-full w-full text-black">☀</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;