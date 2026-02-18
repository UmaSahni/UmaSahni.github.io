import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import SociaIcons from './SociaIcons';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionStack = motion(Stack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <Center className="nav-link home" id="home" pt="100px" minH="90vh">
      <MotionStack
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        paddingTop="4"
        mt="2rem"
        minH="20vh"
        direction={{ base: 'column', md: 'row' }}
        spacing={8}
        align="center"
        justify="center"
        w="90%"
        maxW="1200px"
      >
        <MotionFlex
          p={8}
          flex={1}
          align="center"
          justify="center"
          variants={itemVariants}
        >
          <Stack spacing={6} w="full" maxW="lg">
            <MotionHeading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              variants={itemVariants}
            >
              <MotionText
                as="span"
                position="relative"
                display="inline-block"
                color="white"
                fontWeight="bold"
                _after={{
                  content: "''",
                  width: 'full',
                  height: { base: '20%', md: '30%' },
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bgGradient: 'linear(to-r, #667eea, #764ba2)',
                  zIndex: -1,
                  borderRadius: '4px',
                }}
              >
                Uma Sahni
              </MotionText>
              <br />
              <MotionText
                bgGradient="linear(to-r, #667eea, #764ba2)"
                bgClip="text"
                as="span"
                display="block"
                mt={2}
                variants={itemVariants}
              >
                Full Stack Web Developer
              </MotionText>
            </MotionHeading>
            <MotionText
              fontSize={{ base: 'md', lg: 'lg' }}
              color="rgba(255, 255, 255, 0.8)"
              variants={itemVariants}
              lineHeight="1.8"
            >
              A skilled full stack developer and quick learner who can quickly adapt to new environments.
            </MotionText>
            <MotionBox variants={itemVariants}>
              <SociaIcons />
            </MotionBox>
          </Stack>
        </MotionFlex>

        <MotionFlex
          alignItems="center"
          justifyContent="center"
          flex={1}
          variants={imageVariants}
        >
          <Center position="relative">
            <MotionBox
              position="absolute"
              w="100%"
              h="100%"
              borderRadius="50%"
              bgGradient="linear(to-r, #667eea, #764ba2)"
              opacity={0.3}
              filter="blur(40px)"
              animate={floatingAnimation}
            />
            <MotionImage
              borderRadius="50%"
              alt="Uma Sahni"
              objectFit="cover"
              boxSize={{ base: '16rem', md: '20rem' }}
              backgroundColor="white"
              className="home-img"
              src="https://avatars.githubusercontent.com/u/112793743?v=4"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              boxShadow="0 20px 60px rgba(102, 126, 234, 0.4)"
              border="4px solid"
              borderColor="rgba(102, 126, 234, 0.3)"
            />
            <MotionBox
              position="absolute"
              top="-10px"
              right="-10px"
              w="60px"
              h="60px"
              borderRadius="50%"
              bgGradient="linear(to-r, #667eea, #764ba2)"
              opacity={0.6}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <MotionBox
              position="absolute"
              bottom="-10px"
              left="-10px"
              w="40px"
              h="40px"
              borderRadius="50%"
              bgGradient="linear(to-r, #764ba2, #667eea)"
              opacity={0.5}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </Center>
        </MotionFlex>
      </MotionStack>
    </Center>
  );
}