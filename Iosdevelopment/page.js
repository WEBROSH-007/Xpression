import React from 'react';
import IosSection from './home';
import AppGrid from '../Andrioddevelopment/multiface';
import IosServicesGrid from './idevelopment';
import IosDevelopmentTimeline from './dynamictimeline';
import TechGrid from '../Andrioddevelopment/technologies';
import IndustriesGrid from '../Andrioddevelopment/industries';
import InsightSection from '../Graphics/insight';
import Footer from '../Company/footer';

const page = () => {
  return (
    <div>
      <IosSection/>
      <AppGrid/>
      <IosServicesGrid/>
      <TechGrid/>
      <IosDevelopmentTimeline/>
      <IndustriesGrid/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
