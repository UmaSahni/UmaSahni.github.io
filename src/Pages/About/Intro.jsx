import { Button, Container, Heading, Text, Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionVStack = motion(VStack);

const Intro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box id="about" className="about section" py="80px" px={{ base: 4, md: 8 }}>
      <Container maxW="1200px">
        <MotionVStack
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          spacing={6}
          align="stretch"
        >
          <MotionHeading
            fontFamily="Inter"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            mt="4"
            mb="4"
            color="white"
            textAlign="center"
            variants={itemVariants}
          >
            About Me
          </MotionHeading>

          <MotionBox
            className="nav-link about"
            bg="rgba(255, 255, 255, 0.05)"
            backdropFilter="blur(10px)"
            borderRadius="20px"
            p={{ base: 6, md: 8 }}
            border="1px solid rgba(255, 255, 255, 0.1)"
            variants={itemVariants}
          >
            <MotionHeading
              id="user-detail-name"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              mb="6"
              bgGradient="linear(to-r, #667eea, #764ba2)"
              bgClip="text"
              variants={itemVariants}
            >
              Hi 👋 I'm Uma Sahni
            </MotionHeading>

            <Container maxW="container.lg" px={0}>
              <MotionText
                id="user-detail-intro"
                fontSize={{ base: "md", md: "lg" }}
                color="rgba(255, 255, 255, 0.9)"
                lineHeight="1.8"
                mb="4"
                letterSpacing="0.5px"
                variants={itemVariants}
              >
                A passionate MERN Stack Developer with 1+ years of experience building dynamic, scalable web applications. Proficient in{' '}
                <Text as="span" fontWeight="bold" color="#667eea">
                  HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, and MongoDB.
                </Text>{' '}
                I turn ideas into working full-stack applications, from UI to backend logic, with a focus on clean code, performance, and user-centric design.
              </MotionText>

              <MotionText
                fontSize={{ base: "md", md: "lg" }}
                color="rgba(255, 255, 255, 0.9)"
                lineHeight="1.8"
                letterSpacing="0.5px"
                variants={itemVariants}
              >
                Strong in component-based architecture, state management, and responsive design. A proactive learner and problem-solver, committed to delivering reliable software and contributing effectively in collaborative teams.
              </MotionText>
            </Container>

            <MotionBox
              mt="6"
              display="flex"
              justifyContent="center"
              variants={itemVariants}
            >
              <Button
                id="resume-button-2"
                bgGradient="linear(to-r, #667eea, #764ba2)"
                color="white"
                variant="solid"
                size="lg"
                _hover={{
                  bgGradient: "linear(to-r, #764ba2, #667eea)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
                }}
                transition="all 0.3s ease"
                as="a"
                href="Uma_Sahni_Resume.pdf"
                download="Uma-Sahni-Resume.pdf"
                id="resume-link-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1dRHZrEma-kfLiYj-j_McunCJfHseC3O3/view?usp=share_link"
                  )
                }
              >
                <span style={{ marginRight: "8px" }}>
                  <i className="bx bx-download"></i>
                </span>
                Download Resume
              </Button>
            </MotionBox>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  )
}

export default Intro