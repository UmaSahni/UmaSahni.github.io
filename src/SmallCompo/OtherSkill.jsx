import { Box, Center, SimpleGrid, VisuallyHidden } from '@chakra-ui/react'
import React from 'react'

const OtherSkill = () => {
  const images = [
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968472.png", title:"illustrator"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968520.png", title:"photoshop"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968525.png", title:"premiere pro"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968428.png", title:"after effect"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968442.png", title:"audition"},
    {src:"https://cdn-icons-png.flaticon.com/128/174/174881.png", title:"wordpress"},
    
  ]
    return (
    <div className="skills-card" >
<SimpleGrid columns={[2, null, 3]} spacing={10}>
    
 {
    images.map((el)=> <Center> <Box borderRadius={"10px"}  width="100px" height="100px" _hover={{ bg: "gray.100", color: " white", transform: "scale(1.13)", }}  transition={"0.2s ease-in-out"}  >
     <Center> <img className="skills-card-img" width={"100px"} height={"100px"} src={el.src} /> <VisuallyHidden className="skills-card-name" >{el.title}</VisuallyHidden> </Center>
    </Box> </Center>
    
)} 
 
</SimpleGrid>
    </div>
  )
}

export default OtherSkill