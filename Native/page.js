import React from 'react';
import NativeSection from './home';
import AppGrid from '../Andrioddevelopment/multiface';
import NativeServicesGrid from './ndevelopment';
import TechGrid from '../Andrioddevelopment/technologies';
import NativeDevelopmentTimeline from './ndynamictimeline';
import IndustriesGrid from '../Andrioddevelopment/industries';
import InsightSection from '../Graphics/insight';
import Footer from '../Company/footer';

const page = () => {
  return (
    <div>
    <NativeSection/>
    <AppGrid/>
    <NativeServicesGrid/>
    <TechGrid/>
    <NativeDevelopmentTimeline/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>

    </div>
  )
}

export default page
