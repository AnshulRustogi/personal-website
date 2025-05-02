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
                                {/* White Moon and Star Icon */}
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-gray-800 dark:text-white"
                                >
                                    <path d="M21.752 15.002a9.004 9.004 0 0 1-10.754-10.75 9.004 9.004 0 1 0 10.754 10.75z" />
                                </svg> */}
                                🌑
                            </span>
                        ) : (
                            <span className="flex justify-center items-center h-full w-full">
                                {/* White Sun Icon */}
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-gray-800 dark:text-white"
                                >
                                    <path d="M12 4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1V4zm0 14a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h0a1 1 0 0 1-1-1v-2zm8-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm-14 0a1 1 0 0 1 1-1H4a1 1 0 0 1-1 1h0a1 1 0 0 1 1 1h2a1 1 0 0 1-1-1zm11.071-7.071a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L16.07 4.343a1 1 0 0 1 0-1.414zm-8.485 0a1 1 0 0 1 1.414 0L8.414 5.757a1 1 0 0 1-1.414 1.414L5.586 5.757a1 1 0 0 1 0-1.414zm11.314 11.314a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414zm-11.314 0a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L4.343 16.07a1 1 0 0 1 0-1.414zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
                                </svg> */}
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