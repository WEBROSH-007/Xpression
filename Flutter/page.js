import React from 'react'
import FlutterSection from './home';
import AppGrid from '../Andrioddevelopment/multiface';
import FlutterServicesGrid from './fdevelopment'
import TechGrid from '../Andrioddevelopment/technologies';
import FlutterDevelopmentTimeline from './fdynaictimeline';
import IndustriesGrid from '../Andrioddevelopment/industries';
import InsightSection from '../Graphics/insight';
import Footer from '../Company/footer';

const page = () => {
  return (
    <div>
    <FlutterSection/>
    <AppGrid/>
    <FlutterServicesGrid/>
    <TechGrid/>
    <FlutterDevelopmentTimeline/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
