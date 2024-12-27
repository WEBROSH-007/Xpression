import React from 'react';
import ContentSection from './home';
import Content from './content';
import Offer from './offer';
import IndustriesGrid from './industries';
import TechnologyToolbox from './toolbox';
import StrategyGrid from './strategy';
import InsightSection from '../Graphics/insight';
import Footer from '../Company/footer';



const page = () => {
  return (
    <div>
      <ContentSection/>
      <Content/>
      <Offer/>
      <StrategyGrid/>
      <IndustriesGrid/>
      <TechnologyToolbox/>
      <InsightSection/>
      <Footer/>
      
    </div>
  )
}

export default page

