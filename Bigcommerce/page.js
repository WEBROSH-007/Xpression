import React from 'react'
import BigCommerceSection from './home'
import BigcommerceServices from './bservices'
import BigcommerceFeatures from './bchoose'
import BigcommerceDevelopmentTimeline from './btimeline'
import InsightSection from '../Graphics/insight'
import Footer from '../Company/footer'


const page = () => {
  return (
    <div>
      <BigCommerceSection/>
      <BigcommerceServices/>
      <BigcommerceFeatures/>
      <BigcommerceDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
