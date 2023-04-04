import { Box, Center, SimpleGrid, VisuallyHidden } from '@chakra-ui/react'
import React from 'react'

const Fronted = () => {
  const images = [
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968267.png", title:"HTML"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968242.png", title:"CSS"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968292.png", title:"javaScript"},
    {src:"https://cdn-icons-png.flaticon.com/128/919/919851.png", title:"React"},
    {src:"https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67", title:"Chakra Ui"},
    {src:"https://cdn.worldvectorlogo.com/logos/redux.svg", title:"Redux"}
  ]
  
    return (
    <div className="skills-card" >
<SimpleGrid columns={[2, null, 3]} spacing={10}>
    
 {
    images.map((el)=> <Center> <Box width="100px" height="100px" borderRadius={"10px"}  _hover={{ bg: "gray.100", color: " white", transform: "scale(1.13)", }}  transition={"0.2s ease-in-out"}  >
     <Center>  <img className="skills-card-img" src={el.src} /> <VisuallyHidden className="skills-card-name" >{el.title}</VisuallyHidden>   </Center>
    </Box> </Center>
    
)} 
 
</SimpleGrid>
    </div>
  )
}

export default Fronted