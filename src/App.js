import React from 'react';
// import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import { useTheme } from './utils/themeToggle';

const App = () => {
  const [theme, ] = useTheme();

  return (
    <div className={`min-h-screen bg-black dark:bg-white text-black dark:text-white transition duration-500 ${theme}`}>
      {/* <Header toggleTheme={toggleTheme} /> */}
      <main className="container mx-auto p-4">
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;