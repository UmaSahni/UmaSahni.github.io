import React, { useState } from 'react'
import { Box, Image } from '@chakra-ui/react'

const LANGS_URL = 'https://github-readme-stats.vercel.app/api/top-langs/?username=UmaSahni&langs_count=5&theme=radical&hide_border=true&bg_color=0d1117'

const GitLanguage = () => {
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
        id="github-top-langs"
        width="100%"
        height="auto"
        minH={{ base: '180px', md: '220px', lg: '260px' }}
        objectFit="contain"
        src={LANGS_URL}
        alt="Top languages"
        onError={() => setError(true)}
      />
    </Box>
  )
}

export default GitLanguage
