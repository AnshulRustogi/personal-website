import React from 'react';

const Header = ({ toggleTheme }) => {
    return (
        <header className="bg-white dark:bg-black text-black dark:text-white p-4 flex justify-between items-center">
            {/* <h1 className="text-2xl font-bold">Anshul Rustogi</h1> */}
            <nav>
                {/* <ul className="flex space-x-4">
                    <li><a href="#about" className="hover:text-gray-400">About</a></li>
                    <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
                    <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
                    <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                </ul> */}
                {/* <button
                    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleTheme}
                >
                    Toggle Theme
                </button> */}
            </nav>
        </header>
    );
};

export default Header;