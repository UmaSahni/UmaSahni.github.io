import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text, Badge } from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const ProjectCard = () => {
  const data = [
    {
      image: "https://user-images.githubusercontent.com/112793743/221488574-fc59b18e-e9e4-4a3f-826a-d6147735cbaa.png",
      title: "eBasket",
      discreption: "eBasket is an ecommerce website from which you can purchase shoes. It allows user to search, filter and sort the product.",
      gitHub: "https://github.com/UmaSahni/eBasket",
      live: "https://e-basket.vercel.app/",
      tech: ["React", "ChakraUi", "JavaScript"]
    },
    {
      image: "theghost.png",
      title: "The Ghost Fashion",
      discreption: "This website is a clone of thesouledstore.com. It contains user side as well as admin page",
      gitHub: "https://github.com/UmaSahni/truculent-creature-9857",
      live: "https://ghost-shop.vercel.app/",
      tech: ["React", "ChakraUi", "Redux"]
    },
    {
      image: "https://user-images.githubusercontent.com/112793743/226603742-a02eb018-4043-4a3e-a0c5-3813f70dd4ed.png",
      title: "Service Company",
      discreption: "This website is a clone a urban company. Here you will be provided various services",
      gitHub: "https://github.com/prachi913/wholesale-territory-1714",
      live: "https://amazing-alfajores-a43c73.netlify.app/",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      image: "https://user-images.githubusercontent.com/112793743/228066185-cd2d706e-7f7f-401d-876a-2fbb24382405.png",
      title: "Rock Paper Scissor Game",
      discreption: "This is a simple Rock-Paper-Scissor Game were you can play with computer.",
      gitHub: "https://github.com/UmaSahni/Rock-Paper-Scissor",
      live: "https://roct-paper.vercel.app/",
      tech: ["HTML", "CSS", "JavaScript"]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box id="projects" className="nav-link projects" py={{ base: "80px", md: "100px" }} px={{ base: 4, md: 8 }}>
      <Container maxW="1400px">
        <MotionHeading
          fontFamily="Inter"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign="center"
          color="white"
          mb={{ base: "2.5rem", md: "4rem" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </MotionHeading>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SimpleGrid columns={[1, 2, 3]} spacing={{ base: 6, md: 8 }} minChildWidth="280px">
            {data.map(({ image, title, discreption, gitHub, live, tech }, index) => (
              <MotionBox
                key={title}
                variants={cardVariants}
                className="project-card"
                bg="rgba(255, 255, 255, 0.06)"
                backdropFilter="blur(12px)"
                borderRadius="24px"
                p={{ base: 5, md: 6 }}
                height="100%"
                display="flex"
                flexDirection="column"
                border="1px solid rgba(255, 255, 255, 0.12)"
                position="relative"
                overflow="hidden"
                boxShadow="0 4px 24px rgba(0, 0, 0, 0.15)"
                whileHover={{
                  y: -12,
                  boxShadow: "0 24px 48px rgba(102, 126, 234, 0.25), 0 0 0 1px rgba(102, 126, 234, 0.2)",
                  borderColor: "rgba(102, 126, 234, 0.4)",
                }}
                transition={{ duration: 0.35 }}
              >
                <MotionBox
                  position="relative"
                  borderRadius="16px"
                  overflow="hidden"
                  mb="4"
                  flexShrink={0}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={live} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={image}
                      alt={title}
                      width="100%"
                      height={{ base: "200px", md: "220px" }}
                      objectFit="cover"
                      borderRadius="16px"
                      boxShadow="0 8px 24px rgba(0, 0, 0, 0.3)"
                    />
                    <MotionBox
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="linear-gradient(180deg, transparent 40%, rgba(102, 126, 234, 0.9) 100%)"
                      opacity="0"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="16px"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Text color="white" fontWeight="bold" fontSize="lg" textShadow="0 2px 8px rgba(0,0,0,0.5)">
                        View Project
                      </Text>
                    </MotionBox>
                  </Link>
                </MotionBox>
                <Heading size="md" mt="1" color="white" mb="2" fontSize={{ base: "lg", md: "xl" }}>
                  {title}
                </Heading>
                <Text color="rgba(255, 255, 255, 0.82)" mb="4" fontSize="sm" lineHeight="1.7" flex="1">
                  {discreption}
                </Text>
                <Box mb="4" display="flex" flexWrap="wrap" gap="2">
                  {tech.map((t) => (
                    <Badge
                      key={t}
                      bg="rgba(102, 126, 234, 0.25)"
                      color="white"
                      px="3"
                      py="1.5"
                      borderRadius="8px"
                      fontSize="xs"
                      fontWeight="600"
                      border="1px solid rgba(102, 126, 234, 0.4)"
                    >
                      {t}
                    </Badge>
                  ))}
                </Box>
                <Stack spacing="3" direction={{ base: "column", sm: "row" }}>
                  <Link className="project-deployed-link" to={gitHub} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                    <Button
                      size="md"
                      width="100%"
                      variant="outline"
                      borderColor="rgba(102, 126, 234, 0.6)"
                      color="white"
                      _hover={{
                        bg: "rgba(102, 126, 234, 0.2)",
                        borderColor: "rgba(102, 126, 234, 0.8)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                      }}
                      transition="all 0.3s ease"
                    >
                      GitHub
                    </Button>
                  </Link>
                  <Link className="project-github-link" to={live} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                    <Button
                      size="md"
                      width="100%"
                      bgGradient="linear(to-r, #667eea, #764ba2)"
                      color="white"
                      _hover={{
                        bgGradient: "linear(to-r, #764ba2, #667eea)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 20px rgba(102, 126, 234, 0.45)",
                      }}
                      transition="all 0.3s ease"
                    >
                      Live Demo
                    </Button>
                  </Link>
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
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