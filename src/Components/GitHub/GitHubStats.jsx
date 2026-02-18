import React, { useState } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const STATS_URL = 'https://github-readme-stats.vercel.app/api?username=UmaSahni&count_private=true&theme=radical&hide_border=true&bg_color=0d1117'

const GitHubStats = () => {
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
        id="github-stats-card"
        width="100%"
        height="auto"
        minH={{ base: '180px', md: '220px', lg: '260px' }}
        objectFit="contain"
        src={STATS_URL}
        alt="GitHub stats"
        onError={() => setError(true)}
        fallbackSrc=""
      />
    </Box>
  )
}

export default GitHubStats
