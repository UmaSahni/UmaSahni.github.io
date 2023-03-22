import { Box, Center, Image, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import SocialIcons from './SocialIcon'

const WrapItems = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing='40px' >
    <Box><Image margin={"auto"} width={"21rem"} src="https://i.pinimg.com/564x/0e/f8/b0/0ef8b08b7c3214a8d8df6212ede2a87d.jpg" /></Box>    
    <Box><SocialIcons/></Box>
    </SimpleGrid>
  )
}

export default WrapItems