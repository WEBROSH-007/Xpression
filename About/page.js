import React from 'react';
import Aboutus from './aboutus';
import AboutSection from'./aboutsection';
import PrinciplesSection from './principles';
import Vision from './vision'

const Page = () => {
  return (
    <div >
        <AboutSection/>
        <Aboutus/>
        <Vision/>
        <PrinciplesSection/>
        
    </div>
  );
};

export default Page;
