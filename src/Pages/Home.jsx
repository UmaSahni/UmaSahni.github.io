import { Divider } from '@chakra-ui/react'
import React from 'react'
import ContactMe from '../Components/Contact/ContactMe'
import GitHubData from '../Components/GitHub/GitHubData'
import Hero from '../Components/Hero'
import Skills from '../Components/Skills'
import ProjectCard from '../Project/ProjectCard'

const Home = () => {
  return (
    <div>
       <Hero/>
       <Divider/>
       <Skills/>
      <GitHubData/>
      <ProjectCard/>
      <ContactMe/>
    </div>
  )
}

export default Home