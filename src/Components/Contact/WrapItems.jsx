import { Box, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import SocialIcons from './SocialIcon'

const MotionBox = motion(Box);

const WrapItems = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      gap={{ base: 6, md: 10, lg: 16 }}
      maxW="1000px"
      mx="auto"
      w="100%"
    >
      <MotionBox
        flex="0 0 auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        w={{ base: '100%', md: 'min(45%, 380px)' }}
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-end' }}
      >
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_mwawjro9.json"
          background="transparent"
          speed="1"
          style={{ height: 'clamp(220px, 36vh, 320px)', maxWidth: '100%' }}
          loop
          autoplay
        />
      </MotionBox>
      <MotionBox
        flex="0 0 auto"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        w={{ base: '100%', md: 'min(55%, 420px)' }}
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
        <SocialIcons />
      </MotionBox>
    </Flex>
  )
}

export default WrapItems