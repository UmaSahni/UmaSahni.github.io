import { Box } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from '../Project/ProjectCard'

const Projects = () => {
  return (
    <Box className="nav-link projects" id="projects"  >
      <ProjectCard/>  
    </Box>
  )
}

export default Projects