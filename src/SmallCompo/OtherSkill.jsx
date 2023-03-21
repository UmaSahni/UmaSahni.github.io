import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const OtherSkill = () => {
  const images = [
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968472.png"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968520.png"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968525.png"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968428.png"},
    {src:"https://cdn-icons-png.flaticon.com/128/5968/5968442.png"},
    {src:"https://cdn-icons-png.flaticon.com/128/174/174881.png"},
    
  ]
    return (
    <div>
<SimpleGrid columns={[2, null, 3]} spacing={10}>
    
 {
    images.map((el)=> <Center> <Box borderRadius={"10px"}  width="100px" height="100px" _hover={{ bg: "gray.100", color: " white", transform: "scale(1.13)", }}  transition={"0.2s ease-in-out"}  >
     <Center> <img width={"100px"} height={"100px"} src={el.src} /> </Center>
    </Box> </Center>
    
)} 
 
</SimpleGrid>
    </div>
  )
}

export default OtherSkill