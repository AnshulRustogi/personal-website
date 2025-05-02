import React from 'react';

export const useTheme = () => {
    // const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

    // const toggle = () => {
    //     const newTheme = theme === 'dark' ? 'light' : 'dark';
    //     setTheme(newTheme);
    //     localStorage.setItem('theme', newTheme);
    // };

    // // Apply the theme to the document element whenever it changes
    // useEffect(() => {
    //     document.documentElement.setAttribute('data-theme', theme);
    // }, [theme]);

    // return [theme, toggle];
    //Set theme to dark for now
    const [theme, setTheme] = React.useState('dark');
    return [theme, setTheme]
};

// Initialize theme on load
// const savedTheme = localStorage.getItem('theme') || 'light';
// document.documentElement.setAttribute('data-theme', savedTheme);