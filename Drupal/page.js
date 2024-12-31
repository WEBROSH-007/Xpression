import React from 'react'
import DrupalSection from './home'
import DrupalServices from './dservices'
import DrupalFeatures from './dchoose'
import DrupalDevelopmentTimeline from './dtimeline'
import InsightSection from '../Graphics/insight'
import Footer from '../Company/footer'
import MarketingCard from './quality'

const page = () => {
  return (
    <div>
      <DrupalSection/>
      <DrupalServices/>
      <DrupalFeatures/>
      <DrupalDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
      <MarketingCard/>
    </div>
  )
}

export default page
