import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const GitLanguage = () => {
  return (
    <div  id="github-top-langs" >
        <ReactMarkdown>
       [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=UmaSahni&langs_count=3)](https://github.com/anuraghazra/github-readme-stats)
        </ReactMarkdown>
    </div>
  )
}

export default GitLanguage