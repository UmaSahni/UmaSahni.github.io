import { Box, Center, Image, SimpleGrid, VisuallyHidden } from '@chakra-ui/react'
import React from 'react'

const Backed = () => {
  const images = [
    {src:"https://cdn-icons-png.flaticon.com/128/919/919825.png",title:"node"},
    {src:"https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png?f=avif&w=128",title:"mango"},
    {src:"https://cdn.iconscout.com/icon/free/png-256/express-9-1175170.png?f=avif&w=128",title:"express"},
   
    
  ]
  
    return (
      <div className="skills-card" >

      
        <SimpleGrid columns={[2, null, 3]} spacing={10}>
    
        {
           images.map((el)=> <Center> <Box  borderRadius={"10px"} width="100px" height="100px" _hover={{ bg: "gray.100", color: " white", transform: "scale(1.13)", }}  transition={"0.2s ease-in-out"} >
            <Center> <Image className="skills-card-img"   width={"100px"} height={"100px"} src={el.src} /> <VisuallyHidden className="skills-card-name" >{el.title}</VisuallyHidden> </Center>
           </Box> </Center>
           
       )} 
        
       </SimpleGrid>
       </div>
  )
}

export default Backed