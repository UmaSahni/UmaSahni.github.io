import { Box, Center, Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import Git from './Git'
import GitHubCards from './GitHubCards'
import GitHubStats from './GitHubStats'
import GitLanguage from './GitLanguage'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)

const GitHubData = () => {
  return (
    <Box
      id="github-stats"
      py={{ base: '100px', md: '120px' }}
      px={{ base: 4, md: 8, lg: 12 }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-b, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.06))"
        zIndex="0"
        pointerEvents="none"
      />
      <Container maxW="1600px" position="relative" zIndex="1" px={{ base: 0, md: 4 }}>
        <MotionHeading
          fontFamily="Inter"
          fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
          textAlign="center"
          color="white"
          mb={{ base: '2.5rem', md: '4rem' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          GitHub Statistics
        </MotionHeading>

        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Box
            borderRadius="2xl"
            p={{ base: 5, md: 8, lg: 10 }}
            bg="rgba(255, 255, 255, 0.05)"
            border="1px solid rgba(255, 255, 255, 0.1)"
            backdropFilter="blur(16px)"
            boxShadow="0 12px 48px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)"
          >
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: 5, md: 8 }}
              mb={{ base: '2.5rem', md: '4rem' }}
            >
              <Box flex="1" w="100%">
                <GitHubStats />
              </Box>
              <Box flex="1" w="100%">
                <Git />
              </Box>
              <Box flex="1" w="100%">
                <GitLanguage />
              </Box>
            </SimpleGrid>

            <Center w="100%">
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                w="100%"
                maxW="1200px"
              >
                <GitHubCards />
              </MotionBox>
            </Center>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default GitHubData
