import React from 'react'
import ShopifyFeatures from './choose'
import ShopifyServices from './sservices'
import HeroSection from './quality'
import ShopifySection from './home'
import ShopifyDevelopmentTimeline from './stimeline'
import InsightSection from '../Graphics/insight'
import Footer from '../Company/footer'
const page = () => {
  return (
    <div>
      <ShopifySection/>
      <ShopifyServices/>
      <ShopifyFeatures/>
      <ShopifyDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
