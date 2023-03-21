import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { Card, Divider } from '@chakra-ui/react';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Saparater from './SmallCompo/Saparater';
import ProjectCard from './Project/ProjectCard';




function App() {
  return (
    <div className="App">
      <Navbar/>
       <Hero/>
       <Divider/>
       <Skills/>
      <Saparater/>
      <ProjectCard/>
  
    </div>
  );
}

export default App;
