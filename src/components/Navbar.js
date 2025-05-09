import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleTheme, theme }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

    useEffect(() => {
        const currentTheme = theme;
        setIsDarkMode(currentTheme === 'dark');
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [theme]);

    const handleToggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleTheme();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200 p-4 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-mono font-bold">
                    <span className="text-green-400">{'>'}</span> Backend Engineer
                </div>

                {/* Hamburger Menu for Small and Medium Screens */}
                <button
                    className="lg:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? '✖' : '☰'}
                </button>

                {/* Navigation Links and Theme Toggle for Large Screens */}
                <div className="hidden lg:flex items-center space-x-6 font-mono">
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="#about-me"
                                className="hover:text-green-400 transition"
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className="hover:text-green-400 transition"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="hover:text-green-400 transition"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-green-400 transition"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-green-400 transition"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Theme Toggle for Large Screens */}
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
                                <span className="flex justify-center items-center h-full w-full">
                                    🌑
                                </span>
                            ) : (
                                <span className="flex justify-center items-center h-full w-full  text-black">
                                    ☀
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Page Overlay Menu for Small and Medium Screens */}
            {isMenuOpen && (
                <div
                    className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-colors ${
                        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
                    }`}
                >
                    <button
                        className="absolute top-4 right-4 text-2xl focus:outline-none"
                        onClick={toggleMenu}
                    >
                        ✖
                    </button>
                    <ul className="space-y-6 text-center font-mono text-xl">
                        <li>
                            <a
                                href="#about-me"
                                className="hover:text-green-400 transition"
                                onClick={toggleMenu}
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className="hover:text-green-400 transition"
                                onClick={toggleMenu}
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="hover:text-green-400 transition"
                                onClick={toggleMenu}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-green-400 transition"
                                onClick={toggleMenu}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-green-400 transition"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Theme Toggle in Full-Page Menu */}
                    <div
                        className={`relative w-20 h-10 rounded-full cursor-pointer transition-colors mt-8 ${
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
                                <span className="flex justify-center items-center h-full w-full">
                                    🌑
                                </span>
                            ) : (
                                <span className="flex justify-center items-center h-full w-full text-black">
                                    ☀
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;