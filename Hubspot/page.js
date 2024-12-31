import React from 'react'
import HubSpotSection from './home'
import HubspotServices from './hservices'
import HubSpotFeatures from './hchoose'
import HubspotDevelopmentTimeline from './htimeline'
import InsightSection from '../Video/insight'
import Footer from '../Company/footer'

const page = () => {
  return (
    <div>
      <HubSpotSection/>
      <HubspotServices/>
      <HubSpotFeatures/>
      <HubspotDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
