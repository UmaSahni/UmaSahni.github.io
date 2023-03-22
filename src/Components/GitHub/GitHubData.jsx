import { Box, Center, Heading, SimpleGrid, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import Git from './Git'
import GitHubCards from './GitHubCards'
import GitHubStats from './GitHubStats'
import GitLanguage from './GitLanguage'

const GitHubData = () => {
  return (
    <div>
         <Heading>GitHub Statistics</Heading>
    <div  style={{width:"100%",height:"auto", marginTop:"5rem"}} >
   <Center>

  
<Box mb={"4rem"} width={"80%"} >

<Stack  direction={['column', 'row']} spacing='24px'>
  
  <Box>
      <GitHubStats/>
  </Box>
  
  <Box>
      <Git/>
  </Box>
  <Box>
      <GitLanguage/>
  </Box>
   
   
</Stack>
</Box>
</Center>
<Center>
<GitHubCards/>
</Center>




       
    </div>
    </div>
  )
}

export default GitHubData