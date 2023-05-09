import { Box, Button, Center, Container, Heading, Input, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Gmail from './Gmail'
import SocialIcons from './SocialIcon'
import WrapItems from './WrapItems'

const ContactMe = () => {

  return (
    <div  id="contact" className="nav-link contact" >
      <Heading fontFamily={"Inter"} mt="8"  >Contact Me</Heading>
      <Box height={"50vh"} >
        <WrapItems />
        {/* <SocialIcons/> */}
      </Box>
    </div>
  )
}

export default ContactMe