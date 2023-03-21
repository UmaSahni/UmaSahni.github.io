import { Box, Center, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Backed = () => {
  const images = [
    {src:"https://cdn-icons-png.flaticon.com/128/919/919825.png"},
    {src:"https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png?f=avif&w=128"},
    {src:"https://cdn.iconscout.com/icon/free/png-256/express-9-1175170.png?f=avif&w=128"},
   
    
  ]
  
    return (
        <SimpleGrid columns={[2, null, 3]} spacing={10}>
    
        {
           images.map((el)=> <Center> <Box  borderRadius={"10px"} width="100px" height="100px" _hover={{ bg: "gray.100", color: " white", transform: "scale(1.13)", }}  transition={"0.2s ease-in-out"} >
            <Center> <Image    width={"100px"} height={"100px"} src={el.src} /> </Center>
           </Box> </Center>
           
       )} 
        
       </SimpleGrid>
  )
}

export default Backed