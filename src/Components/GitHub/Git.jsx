import React, { useState } from 'react'
import { Box, Image } from '@chakra-ui/react'

const STREAK_URL = 'https://streak-stats.demolab.com/?user=UmaSahni&theme=radical&hide_border=true&background=0d1117'

const Git = () => {
  const [error, setError] = useState(false)
  if (error) return null
  return (
    <Box
      as="figure"
      width="100%"
      minH={{ base: '180px', md: '220px', lg: '260px' }}
      borderRadius="xl"
      overflow="hidden"
      bg="rgba(255,255,255,0.04)"
      border="1px solid rgba(255,255,255,0.1)"
    >
      <Image
        id="github-streak-stats"
        width="100%"
        height="auto"
        minH={{ base: '180px', md: '220px', lg: '260px' }}
        objectFit="contain"
        src={STREAK_URL}
        alt="GitHub streak"
        onError={() => setError(true)}
      />
    </Box>
  )
}

export default Git
