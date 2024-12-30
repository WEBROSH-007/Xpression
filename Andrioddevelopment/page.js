import React from 'react';
import AndriodSection from './home';
import AppGrid from './multiface';
import ServicesGrid from './development';
import DevelopmentTimeline from './dynamic';
import IndustriesGrid from './industries';
import InsightSection from '../Graphics/insight';
import Footer from '../Company/footer';
import TechGrid from './technologies';
const page = () => {
  return (
    <div>
      <AndriodSection/>
      <AppGrid/>
      <ServicesGrid/>
      <DevelopmentTimeline/>
      <TechGrid/>
      <IndustriesGrid/>
      <InsightSection/>
      <Footer/>

    </div>
  )
}

export default page
