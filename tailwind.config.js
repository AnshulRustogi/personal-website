module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Dark background
        secondary: '#edf2f7', // Light text
        accent: '#4a5568', // Accent color
      },
      fontFamily: {
        sans: ['Courier New', 'monospace'], // Set monospace as the default font
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};