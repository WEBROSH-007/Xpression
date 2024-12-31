import React from 'react'
import WordPressSection from './home'
import WordPressServices from './wservice'
import WordpressFeatures from './wchoose'
import WordPressDevelopmentTimeline from './wtimeline'
import InsightSection from '../Graphics/insight'
import Footer from '../Company/footer'

const page = () => {
  return (
    <div>
      <WordPressSection/>
      <WordPressServices/>
      <WordpressFeatures/>
      <WordPressDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
