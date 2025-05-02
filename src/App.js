import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './utils/themeToggle';

const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={`${theme} transition duration-500 ease-in-out`}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header toggleTheme={toggleTheme} />
        <main className="container mx-auto p-4">
          <AboutMe />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;