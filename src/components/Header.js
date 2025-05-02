import React, { useEffect, useState } from 'react';

const Header = ({ toggleTheme }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check the current theme from localStorage or system preference
        const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setIsDarkMode(currentTheme === 'dark');
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, []);

    const handleToggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleTheme();
    };

    return (
        <header className="bg-white dark:bg-black text-black dark:text-white p-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav>
                {/* Toggle Switch */}
                <div
                    className={`relative w-20 h-10 rounded-full cursor-pointer transition-colors ${
                        isDarkMode ? 'bg-gray-800' : 'bg-gray-300'
                    }`}
                    onClick={handleToggleTheme}
                >
                    {/* Sliding Button */}
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
                            <span className="flex justify-center items-center h-full w-full">
                                ☀
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;