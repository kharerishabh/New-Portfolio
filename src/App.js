import React from 'react'
import Nav from './components/navbar/Nav';
import Intro from './components/Intro/Intro';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
