import React from 'react';
import XamarinSection from './home';
import AppGrid from '../Andrioddevelopment/multiface';
import XamarinServicesGrid from './xdevelopment';
import TechGrid from '../Andrioddevelopment/technologies';
import XamarinDevelopmentTimeline from './xdynamictimeline';
import IndustriesGrid from '../Andrioddevelopment/industries';
import InsightSection from '../Graphics/insight';
import Footer from '../Company/footer';

const page = () => {
  return (
    <div>
        <XamarinSection/>
        <AppGrid/>
        <XamarinServicesGrid/>
        <TechGrid/>
        <XamarinDevelopmentTimeline/>
        <IndustriesGrid/>
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page;
