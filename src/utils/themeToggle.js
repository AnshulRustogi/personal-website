import React, { useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = React.useState(() => {
        // Initialize theme from localStorage or default to 'light'
        return localStorage.getItem('theme') || 'light';
    });

    const toggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        // Apply the theme to the document
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return [theme, toggle];
};

// Initialize theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);