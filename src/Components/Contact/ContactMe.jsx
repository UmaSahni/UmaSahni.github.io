import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import WrapItems from './WrapItems'

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const ContactMe = () => {
  return (
    <Box id="contact" className="nav-link contact" py="80px" px={{ base: 4, md: 8 }}>
      <Container maxW="1200px">
        <MotionHeading
          fontFamily="Inter"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          mt="8"
          mb="3rem"
          textAlign="center"
          color="white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </MotionHeading>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <WrapItems />
        </MotionBox>
      </Container>
    </Box>
  )
}

export default ContactMe