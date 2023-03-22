import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import GitHubCalendar from 'react-github-calendar';
const GitHubCards = () => {
  return (
    <div className="react-activity-calendar" >
        <GitHubCalendar  username="UmaSahni" />
    </div>
  )
}

export default GitHubCards