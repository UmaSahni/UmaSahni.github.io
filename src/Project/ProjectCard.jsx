import { Box, Button, ButtonGroup, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const ProjectCard = () => {
  
  const data = [
    {
      image:"https://user-images.githubusercontent.com/112793743/221488574-fc59b18e-e9e4-4a3f-826a-d6147735cbaa.png",
      title:"eBasket",
      discreption:"eBasket is an ecommerce website from which you can purchase shoes. It allows user to search, filter and sort the product.",
    },
    {
      image:"https://user-images.githubusercontent.com/112793743/221488574-fc59b18e-e9e4-4a3f-826a-d6147735cbaa.png",
      title:"eBasket",
      discreption:"eBasket is an ecommerce website from which you can purchase shoes. It allows user to search, filter and sort the product.",
    },
    {
      image:"https://user-images.githubusercontent.com/112793743/221488574-fc59b18e-e9e4-4a3f-826a-d6147735cbaa.png",
      title:"eBasket",
      discreption:"eBasket is an ecommerce website from which you can purchase shoes. It allows user to search, filter and sort the product.",
    },
    {
      image:"https://user-images.githubusercontent.com/112793743/221488574-fc59b18e-e9e4-4a3f-826a-d6147735cbaa.png",
      title:"eBasket",
      discreption:"eBasket is an ecommerce website from which you can purchase shoes. It allows user to search, filter and sort the product.",
    },
  ]
  
  
  return (
    <div>
       
     <Heading m={"3rem"} >Projects</Heading>
       
   <SimpleGrid  columns={[1, 2, 4]} spacing='40px'>
   
    {
      data.map(({image, title, discreption})=>{
        return <Box borderRadius={"20"}  p={"8"}  boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"  height='30rem'>
          <Image
          _hover={{ bg: "gray.100", color: " white", transform: "scale(1.13)", }} 
          transition={"0.2s ease-in-out"} 
          boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;" 
          src={image}
          />
          <Heading mt={"2"} >{title}</Heading>
          <Text>{discreption}</Text>
          
          <Stack>
          <Button p={"2"} width={"100%"} variant='outline'  colorScheme='blue' >GitHub</Button>
          <Button p={"2"} width={"100%"} variant='outline'  colorScheme='blue' >Live</Button>
          </Stack>
          
          </Box>   
      })
    }  
    
    </SimpleGrid>  
    
        
        
    </div>
  )
}

export default ProjectCard
 




 {/* <SimpleGrid mt={"5rem"} columns={[1, 2, 3]} spacing='40px'> */}
  {/* </SimpleGrid>    */}
        {/* <Image 
         _hover={{ bg: "gray.100", color: " white", transform: "scale(1.13)", }} 
         transition={"0.2s ease-in-out"} 
         boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;" 
         src="" />
       
        <Heading mt={"2"} >E-Basket</Heading> */}
        
  
        {/* <Box bg='#2c3e50'   height='30rem'>
          <Image src='https://user-images.githubusercontent.com/112793743/226603742-a02eb018-4043-4a3e-a0c5-3813f70dd4ed.png' ></Image>
        </Box>
        <Box bg='#2c3e50'  height='30rem'></Box> */}