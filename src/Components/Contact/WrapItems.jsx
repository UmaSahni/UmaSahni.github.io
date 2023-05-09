import { Box, Center, Image, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import SocialIcons from './SocialIcon'

const WrapItems = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing='40px' >
    <Box m={"auto"} ><lottie-player src="https://assets6.lottiefiles.com/packages/lf20_mwawjro9.json"  background="transparent"  speed="1"  style={{ height: "50vh"}}  loop  autoplay></lottie-player></Box>    
    <Box><SocialIcons/></Box>
    </SimpleGrid>
  )
}

export default WrapItems