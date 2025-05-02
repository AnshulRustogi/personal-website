import React, { useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

    const toggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, toggle];
};

// Initialize theme on load
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);