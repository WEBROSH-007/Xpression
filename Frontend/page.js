import React from 'react';
import FrontEndSection from './home';
import FrontServicesGrid from './frontdevelopment';
import WebDevServices from './fullscale';
import TechStack from './techstack';
import FrontDesignProcess from './fdynamic';
import InsightSection from '../Graphics/insight';
import Footer from '../Company/footer';
const page = () => {
  return (
    <div>
      <FrontEndSection/>
      <FrontServicesGrid/>
      <TechStack/>
      <FrontDesignProcess/>
      <WebDevServices/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
