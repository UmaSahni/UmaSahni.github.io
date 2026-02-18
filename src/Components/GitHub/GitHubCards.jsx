import React from 'react'
import { Box } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar'

const darkTheme = {
  level0: 'rgba(255, 255, 255, 0.06)',
  level1: 'rgba(102, 126, 234, 0.4)',
  level2: 'rgba(102, 126, 234, 0.6)',
  level3: 'rgba(118, 75, 162, 0.65)',
  level4: 'rgba(118, 75, 162, 0.9)',
}

const GitHubCards = () => {
  return (
    <Box
      className="react-activity-calendar github-calendar-wrap"
      width="100%"
      borderRadius="xl"
      p={{ base: 5, md: 8 }}
      bg="rgba(255,255,255,0.03)"
      border="1px solid rgba(255,255,255,0.08)"
    >
      <GitHubCalendar username="UmaSahni" theme={darkTheme} blockSize={16} blockMargin={6} fontSize={14} />
    </Box>
  )
}

export default GitHubCards
