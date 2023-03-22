import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { Card, Divider } from '@chakra-ui/react';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Saparater from './SmallCompo/Saparater';
import ProjectCard from './Project/ProjectCard';
import Wave from './SmallCompo/Wave';
import ContactMe from './Components/Contact/ContactMe';
import Git from './Components/GitHub/Git';
import GitHubData from './Components/GitHub/GitHubData';
import AllRoutes from './Components/AllRoutes';





function App() {
  return (
    <div className="App">
      <Navbar  id="nav-menu" />
      <AllRoutes/>
      
      
   
   
   
    </div>
  );
}

export default App;
