import { Box, Button, ButtonGroup, Center, Container, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
const ProjectCard = () => {

  const data = [
    {
      image: "https://user-images.githubusercontent.com/112793743/221488574-fc59b18e-e9e4-4a3f-826a-d6147735cbaa.png",
      title: "eBasket",
      discreption: "eBasket is an ecommerce website from which you can purchase shoes. It allows user to search, filter and sort the product.",
      gitHub: "https://github.com/UmaSahni/eBasket",
      live: "https://e-basket.vercel.app/",
    },
    {
      image: "https://user-images.githubusercontent.com/112793743/228057925-4657060d-07d6-4524-9ff1-c6051db77172.png",
      title: "Foodies",
      discreption: "eBasket is an ecommerce website from which you can purchase shoes. It allows user to search, filter and sort the product.",
      gitHub: "https://github.com/UmaSahni/foodiesreact",
      live: "https://foodiesreact.vercel.app/",
    },
    {
      image: "https://user-images.githubusercontent.com/112793743/226603742-a02eb018-4043-4a3e-a0c5-3813f70dd4ed.png",
      title: "Service Company",
      discreption: "eBasket is an ecommerce website from which you can purchase shoes. It allows user to search, filter and sort the product.",
      gitHub: "https://github.com/prachi913/wholesale-territory-1714",
      live: "https://amazing-alfajores-a43c73.netlify.app/",
    },
    {
      image: "https://user-images.githubusercontent.com/112793743/228066185-cd2d706e-7f7f-401d-876a-2fbb24382405.png",
      title: "Rock Paper Scissor Game",
      discreption: "eBasket is an ecommerce website from which you can purchase shoes. It allows user to search, filter and sort the product.",
      gitHub: "https://github.com/UmaSahni/Rock-Paper-Scissor",
      live: "https://roct-paper.vercel.app/",
    },
  ]


  return (
    <div className="project-card"   id="projects"   >
      <div className="nav-link projects" >
      <Heading m={"3rem"} id="projects" >Projects</Heading>

      <SimpleGrid margin="auto" width={"85%"} columns={[1, 2, 2, 4]} spacing='40px'>

        {
          data.map(({ image, title, discreption , gitHub, live}) => {
            return <Box mr={"auto"} borderRadius={"20"} p={"5"} boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;" height='30rem'>
             <Link to={live} target="_blank" >
              <Image
                _hover={{ bg: "gray.100", color: " white", transform: "scale(1.11)", }}
                transition={"0.2s ease-in-out"}
                boxShadow=" rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                src={image}
              />
              </Link>
              <Heading className="project-title" mt={"2"} >{title}</Heading>
              <Text className="project-description" >{discreption}</Text>
                <Text className="project-tech-stack" > HTML, CSS, JavaScript </Text>
              <Stack>
              <Link className="project-deployed-link" to={gitHub} target="_blank" > <Button p={"2"} width={"100%"} variant='outline' colorScheme='blue' >GitHub</Button> </Link> 
              <Link className="project-github-link" to={live}  target="_blank" >   <Button p={"2"} width={"100%"} variant='outline' colorScheme='blue' >Live</Button></Link> 
              </Stack>

            </Box>

          })
        }

      </SimpleGrid>


      </div>
    </div>
  )
}

export default ProjectCard





{/* <SimpleGrid mt={"5rem"} columns={[1, 2, 3]} spacing='40px'> */ }
{/* </SimpleGrid>    */ }
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