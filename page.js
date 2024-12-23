import React from 'react';
import DiagonalGridWithText from './rotate';
import ResponsiveGrid from './design';
import PlatformPerformance from './button';
import Roadmap from './roadmap';
import ServicesSection from './box';
import Hexagon from './hexagon';
import ResultRow from './band';
import MarketingGrid from './Marketing';
import  Reviews from './reviews';
import Footer from './footer';


const Page = () => {
  return (
    <div >
      <ResponsiveGrid/>
      <Hexagon/>
      <ServicesSection/>
      <Roadmap/>
      <DiagonalGridWithText/>
      <PlatformPerformance/>
      <ResultRow/>
      <MarketingGrid/>
      <Reviews/>
      <Footer/>
     
  
  
      
      
    </div>
  );
};

export default Page;
